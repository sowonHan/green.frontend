// getCurrentWeather("incheon");

var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"];

$(".temp").each(function(i) {
    var temp = getCurrentTemp(cityList[i]);
    console.log(temp);
    var iconURL = "https://openweathermap.org/img/wn/";
    $(this).text(temp.celsius + "℃");
    $(this).prev().children().attr("src", iconURL + temp.icon + ".png");
});

//아이콘 참고 - https://openweathermap.org/weather-conditions

$(".location").on({
    "click" : function() {
        var q = $(this).children(".q").attr("id");
        var redirectURL = "pages/weather_location.html?q=" + q;
        location.href = redirectURL;
    },
});