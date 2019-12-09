var NewLoan = (function () {

    function initUserData() {
        if (!sessionStorage.LoggedInUser) { window.location.href = "Signin.html"; };
        var user = JSON.parse(sessionStorage.LoggedInUser);
        $("#txt-fname").val(user.FirstName);
        $("#txt-lname").val(user.LastName);
        $("#txt-email").val(user.EmailAddress);
        $("#txt-contact").val(user.ContactNumber);
        
    }

    function btnFindLendersClicked() {
        //validate the user input data
        var $fields = $("[required]");
        $fields.each(function (idx, o) {
            if ($(o).is(":input")) {
                if (!$(o).val()) { $(o).addClass("txt-required"); }
                else { $(o).removeClass("txt-required"); }
            }
            else if ($(o).is(":select")) {
                if (!$(o).val()) { $(o).addClass("txt-required"); }
                else { $(o).removeClass("txt-required"); }
            }
        });
        var invalidFields = $(".txt-required").length;
        if (invalidFields && invalidFields > 0) { return; }
        AssessLoan.ShowSpinner();
        var creditScore = $("#select-credit-score option:selected").attr("data-minscore");
        var loanType = $("#select-loan-type").val();
        var availableLenders = $.grep(Lenders, function (a, b) {
            return (Number(creditScore) >= Number(a.MinCreditScore) && a.LoanTypes.indexOf(loanType) >= 0 ) 
        });
        if (!availableLenders || availableLenders.length <= 0) { alert("No lenders availalble based on entered information. Please try again."); AssessLoan.HideSpinner(); return; }
        var $html = "";
        $.each(availableLenders, function (idx, o) {
            $html += "<div class='lender-container'>";
            $html += "<ul class='lender-details'>";
            $html += "<li class='image-container v-align-middle'>" + "<img src='..\\Images\\" + o.LogoName + "' class='lender-logo' />" + "</li>";
            $html += "<li><span class='lender-header'>Lender:</span>" + o.LenderName + "</li>";
            $html += "<li><span class='lender-header'>APR Range:</span>" + o.AprFrom + " - " + o.AprTo + "</li>";
            $html += "<li><span class='lender-header'>Loan Terms:</span>" + o.LoanPeriods.join(', ') + " year(s)</li>";
            $html += "<li><span class='lender-header'>Rating:</span>" + o.Rating + "</li>";
            $html += "<li class='text-center' style='position: relative; top: 18px;'>" + "<input data-id='" + o.ID + "' type='button' class='btn-select-lender' value='Select' />" + "</li>";
            $html += "</ul>";
            $html += "</div>";
        });
        AssessLoan.HideSpinner();
        $("#modal-lender-rates .modal-body").html($html);
        $("#modal-lender-rates").css("display", "block");//show the modal
    }

    function btnSelectLenderClicked(e) { 
        var lenderId = $(this).attr("data-id");
        AssessLoan.ShowSpinner();
        var formData = {
            UserId: AssessLoan.LoggedInUser._id,
            FirstName: $("#txt-fname").val(),
            LastName: $("#txt-lname").val(),
            Email: $("#txt-email").val(),
            SSN: $("#txt-ssn").val(),
            ContactNumber: $("#txt-contact").val(),
            DOB: $("#txt-dob").val(),
            Occupation: $("#txt-occupation").val(),
            AnnualIncome: $("#txt-income").val(),
            Address: $("#txt-address").val(),
            LoanType: $("#select-loan-type").val(),
            CreditScore: $("#select-credit-score").val(),
            LenderId: lenderId,
            DateSubmitted: new Date().toDateString(),
            LoanAmount: $("#txt-amount").val()
        };
        var options = {
            url: "/api/createnewloan",
            data: formData,
            fnSuccess: function (response) {
                if (response.iserror) {
                    alert(response.message);
                }
                else {
                    alert("Loan application completed successfully!");
                    window.location.href = "myaccount.html";
                }
            },
            fnError: function () {
                alert("There was an error in saving your loan application.");
            }
        };
        setTimeout(function () {
            AssessLoan.AjaxPost(options);
        }, 2000);
    }

    $(document).ready(function () {
        initUserData();
        $(document).on("click", "#btn-find-lenders", btnFindLendersClicked);
        $(document).on("click", ".btn-select-lender", btnSelectLenderClicked);
    });

    return {

    }

})();