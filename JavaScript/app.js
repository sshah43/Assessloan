var AssessLoan = (function () {

    function init() {
        getHeader();
        getFooter();
    }

    function getHeader() {
        $.ajax({
            url: "shared/header.html",
            type: "GET",
            dataType: "html",
            success: function (data) {
                $("#header").html(data);
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

    $(document).ready(function () {
        init();
    });

    return {
        
    }

})();