var Navigation = function () {

    function setNavBarHighlight() {
        var currentPageUrl = window.location.pathname.toLowerCase();
        if (currentPageUrl.indexOf("home") >= 0) { $("#lnk-home").addClass("active");}
        else if (currentPageUrl.indexOf("myaccount") >= 0) { $("#lnk-myaccount").addClass("active"); }
        else if (currentPageUrl.indexOf("newloan") >= 0) { $("#lnk-newloan").addClass("active"); }
        else if (currentPageUrl.indexOf("register") >= 0) { $("#lnk-register").addClass("active"); }
        else if (currentPageUrl.indexOf("contactus") >= 0) { $("#lnk-contactus").addClass("active"); }
        else { $("#lnk-signin").addClass("active"); }
    }

    $(document).ready(function () {
        setNavBarHighlight();
    });

}();