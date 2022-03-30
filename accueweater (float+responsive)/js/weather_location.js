// location.href만 쓰면 url을 가져올 수 있다
var currentURL = location.href;
var urlObj = new URL(currentURL);

var params = urlObj.searchParams;
var q = params.get("q");

var result = getCurrentWeather(q);

$("#temp").text(result.main.temp + "℃");
$("#wind").text(result.wind.speed + "m/s");
$("#humidity").text(result.main.humidity + "%");