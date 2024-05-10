// main.js

// 전역 변수로 시간 변수들을 선언
var hours, minutes, seconds;

// 한 자리 숫자를 두 자리 숫자로 변환하는 함수
function padZero(num) {
    return (num < 10 ? "0" : "") + num;
}

// 매 초마다 시계와 progress-bar 업데이트
setInterval(updateClockAndBar, 1000);

// 시계와 progress-bar 업데이트 함수
function updateClockAndBar() {
    // 현재 날짜와 시간 객체 생성
    var now = new Date();
    
    // 시, 분, 초 추출
    hours = padZero(now.getHours());
    minutes = padZero(now.getMinutes());
    seconds = padZero(now.getSeconds());
    
    // 시간 문자열 생성
    var timeString = hours + " : " + minutes + " : " + seconds;
    
    // clock-nums 요소에 시간 표시
    document.getElementById("clock-nums").textContent = timeString;
    
    // 전체 초수를 계산합니다.
    var totalSeconds = 3600 * hours + 60 * minutes + seconds;

    // 초당 진행률을 계산하고 green-bar의 너비를 설정합니다.
    var totalPercentage = Number((totalSeconds / 86400).toFixed(2));
    var greenBar = document.getElementById("progress-bar-green");
    greenBar.style.width = totalPercentage + "%";

    var percentString = `오늘 하루 ${totalPercentage}%가 지났어요!`;
    document.getElementById("today-percentage").textContent = percentString;
}


