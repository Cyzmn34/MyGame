

    $("#moreinfo").click(function () {
        $("#content").hide();
        $("#morecontent").show();
        $("#btnmain").click(function () {
            $("#morecontent").hide();
            $("#content").show();
        })
    })



