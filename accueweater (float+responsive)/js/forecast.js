var url = "https://api.openweathermap.org/data/2.5/weather";
url += "?l&appid=18bcd66d8c2f78ea7c4d91ad9ee784bc";
url += "&units=metric";
url += "&lang=kr";
url += "&q=";


// 현재 날씨의 모든 정보를 얻어오는 함수
function getCurrentWeather(city) {
    var dataObj;
    var openWeatherAPI = url;

    $.ajax({
        type : "GET",
        url : openWeatherAPI += city,
        dataType : "json",
        // 동기화 여부. 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
        async : false,
        // 서버와 통신 성공했을 때
        success : function(data) {
            dataObj = data;
            console.log(dataObj);
        },
        // 서버와의 통신이 실패했을 때
        error : function(req, status, err) {
            console.log("code: ", req.state);
            console.log("message: ", req.responseText);
            console.log("error: ", err);
        }
    });

    return dataObj;
};

// 현재 날씨의 온도만 얻어오는 함수
function getCurrentTemp(city) {
    var temp = {};
    var openWeatherAPI = url;

    $.ajax({
        type : "GET",
        url : openWeatherAPI += city,
        dataType : "json",
        // 동기화 여부. 결과 데이터를 리턴시키기 위해 동기 방식으로 변경. ajjx는 기본적으로 비동기(true)
        async : false,
        // 서버와 통신 성공했을 때
        success : function(data) {
            temp.celsius = Math.floor(data.main.temp); // 소수점 버림
            temp.icon = data.weather[0].icon;
        },
        // 서버와의 통신이 실패했을 때
        error : function(req, status, err) {
            console.log("code: ", req.state);
            console.log("message: ", req.responseText);
            console.log("error: ", err);
        }
    });

    return temp;
};