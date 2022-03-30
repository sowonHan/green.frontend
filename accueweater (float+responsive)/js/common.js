$(function() {
    $(".hamburger").click(function() {
        $(".mobile.hamburger").hide();
        $(".mobile.close").show();

        // 모바일 메뉴 초기화. 그래야 append로 추가하는 게 누적되지 않는다
        $("#mobile_menu").empty();

        var nav = $(".nav").clone();
        $("#mobile_menu").append(nav);
        $("#mobile_menu").show();
    });

    $(".close").click(function() {
        $(".mobile.close").hide();
        $(".mobile.hamburger").show();

        $("#mobile_menu").hide();
    });
});

$(window).resize(function() {
    var width = $(window).width();
    if (width >= 767) {
        if ($("#mobile_menu").is(":visible")) {
            $(".mobile.close").hide();
            $(".mobile.hamburger").show();

            $("#mobile_menu").hide();
        }
    }
});