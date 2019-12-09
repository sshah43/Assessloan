var MyAccount = (function () {

    function getLender(id) {
        var lender = $.grep(Lenders, function (a, b) {
            return a.ID == id
        });
        return (lender) ? lender[0] : {};
    }


    function loadUserLoans() {
        if (!sessionStorage.LoggedInUser) { window.location.href = "Signin.html"; };
        setTimeout(function () { AssessLoan.ShowSpinner(); }, 100);
        var formData = {
            UserId: AssessLoan.LoggedInUser._id
        };
        var options = {
            url: "/api/getuserloans",
            data: formData,
            fnSuccess: function (response) {
                var $tbl = $("#tbl-loans");
                setTimeout(function () { AssessLoan.HideSpinner(); }, 100);
                $("#loan-applications-container").removeClass("hidden");
                if (!response.iserror && response.data) {
                    var loans = JSON.parse(response.data);
                    var $html = "";
                    $.each(loans, function (idx, loan) {
                        var lender = getLender(loan.LenderId);
                        $html += "<tr>";
                        $html += "<td>" + lender.LenderName + "</td>";
                        $html += "<td>" + loan.LoanType + "</td>";
                        $html += "<td>" + lender.AprFrom + "-" + lender.AprTo + "</td>";
                        $html += "<td>" + loan.LoanAmount + "</td>";
                        $html += "<td>" + loan.DateSubmitted + "</td>";
                        $html += "</tr>";
                    });
                    $tbl.find("tbody").html($html);
                    console.log(response);
                }
            },
            fnError: function () {
                AssessLoan.HideSpinner();
                alert("There was an error in getting user loans.");
            }
        };
        AssessLoan.AjaxPost(options);
    }

    $(document).ready(function () {
        loadUserLoans();
    });

    return {

    };

})();