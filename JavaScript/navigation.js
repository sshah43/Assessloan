var Navigation = function () {

    function setNavBarHighlight() {
        var currentPageUrl = window.location.pathname;
        $("a[href*='" + currentPageUrl + "']").addClass("active");
    }

    $(document).ready(function () {
        setNavBarHighlight();
    });

}();