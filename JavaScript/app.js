var AssessLoan = (function () {

    function init() {
        getHeader();
        getFooter();
        initPageEvents();
    }

    function lnkLoginClicked(e) {
        var mode = $(this).attr("data-mode");
        if (mode == "0") { sessionStorage.clear(); }
        window.location.href = "Signin.html";
    }

    function initPageEvents() {
        $(document).off("click", ".lnk-login").on("click", ".lnk-login", lnkLoginClicked);
    }

    function validateUser() {
        if (sessionStorage.LoggedInUser) {
            var user = JSON.parse(sessionStorage.LoggedInUser);
            $("#userinfo-container").removeClass("hidden");
            $("#userinfo").html(user.FirstName + " " + user.LastName);
            $(".lnk-login").attr("data-mode", "0");
            $(".lnk-login").html("Log Out");
        }
        else {
            $(".lnk-login").attr("data-mode", "1");
            $(".lnk-login").html("Sign In");
        }
    }

    function getHeader() {
        $.ajax({
            url: "shared/header.html",
            type: "GET",
            dataType: "html",
            success: function (data) {
                $("#header").html(data);
                validateUser();
            },
            error: function (xhr, status) {
                alert("Sorry, there was a problem!");
            }
        });
    }

    function getFooter() {
        $.ajax({
            url: "shared/footer.html",
            type: "GET",
            dataType: "html",
            success: function (data) {
                $("#footer").html(data);
            },
            error: function (xhr, status) {
                alert("Sorry, there was a problem!");
            }
        });
    }    

    function ajaxPost(options) {
        console.log(options);
        if (!options) return;
        options.fnSuccess = (options.fnSuccess) ? options.fnSuccess : function () { };
        options.fnError = (options.fnError) ? options.fnError : function () { };
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: options.url,
            data: JSON.stringify(options.data),
            dataType: 'json',
            success: options.fnSuccess,
            error: options.fnError
        });
    }

    function showSpinner() {
        $(".loading").removeClass("hidden");
    }

    function hideSpinner() {
        $(".loading").addClass("hidden");
    }

    $(document).ready(function () {
        init();
    });

    return {
        AjaxPost: ajaxPost,
        ShowSpinner: showSpinner,
        HideSpinner: hideSpinner,
        LoggedInUser: function () {
            if (!sessionStorage.LoggedInUser) return {}; return JSON.parse(sessionStorage.LoggedInUser); }()
    }

})();