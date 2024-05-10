const timeRanges = [
    { start: 6 * 3600 + 30 * 60, end: 7 * 3600 + 20 * 60, label: "아침 기상 / 인원 점검" },
    { start: 7 * 3600 + 20 * 60, end: 8 * 3600, label: "아침 식사" },
    { start: 8 * 3600, end: 8 * 3600 + 40 * 60, label: "아침 프로그램" },
    { start: 8 * 3600 + 40 * 60, end: 8 * 3600 + 50 * 60, label: "주번 활동" },
    { start: 8 * 3600 + 50 * 60, end: 8 * 3600 + 55 * 60, label: "담임 조회" },
    { start: 8 * 3600 + 55 * 60, end: 9 * 3600, label: "이동 및 수업 준비" },
    { start: 9 * 3600, end: 10 * 3600, label: "1교시" },
    { start: 10 * 3600, end: 11 * 3600, label: "2교시" },
    { start: 11 * 3600, end: 12 * 3600, label: "3교시" },
    { start: 12 * 3600, end: 12 * 3600 + 50 * 60, label: "4교시" },
    { start: 12 * 3600 + 50 * 60, end: 13 * 3600 + 50 * 60, label: "점심 시간" },
    { start: 13 * 3600 + 50 * 60, end: 14 * 3600 + 50 * 60, label: "5교시" },
    { start: 14 * 3600 + 50 * 60, end: 15 * 3600 + 50 * 60, label: "6교시" },
    { start: 15 * 3600 + 50 * 60, end: 16 * 3600 + 40 * 60, label: "7교시" },
    { start: 16 * 3600 + 40 * 60, end: 17 * 3600, label: "청소 및 종례" },
    { start: 17 * 3600, end: 17 * 3600 + 10 * 60, label: "방과후 수업 준비" },
    { start: 17 * 3600 + 10 * 60, end: 18 * 3600 + 35 * 60, label: "방과후 수업" },
    { start: 18 * 3600 + 35 * 60, end: 19 * 3600 + 50 * 60, label: "저녁 식사" },
    { start: 19 * 3600 + 50 * 60, end: 21 * 3600 + 10 * 60, label: "야자 1타임" },
    { start: 21 * 3600 + 10 * 60, end: 21 * 3600 + 30 * 60, label: "휴식 시간" },
    { start: 21 * 3600 + 30 * 60, end: 22 * 3600 + 50 * 60, label: "야자 2타임" },
    { start: 22 * 3600 + 50 * 60, end: 24 * 3600, label: "생활관 이동" },
    { start: 0, end: 6 * 3600 + 30 * 60, label: "취침" }
];

const padZero = num => (num < 10 ? "0" : "") + num;

const updateClockAndBar = () => {
    const now = new Date();
    const hours = padZero(now.getHours());
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());
    const timeString = `${hours} : ${minutes} : ${seconds}`;
    document.getElementById("clock-nums").textContent = timeString;
    const totalSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    const totalPercentage = ((totalSeconds / 86400) * 100).toFixed(2);
    document.getElementById("progress-bar-green").style.width = `${totalPercentage}%`;
    const percentString = `오늘 하루 ${totalPercentage}%가 지났어요!`;
    document.getElementById("today-percentage").textContent = percentString;
    updateTimeName(totalSeconds);   
}

const updateTimeName = totalSeconds => {
    for (const range of timeRanges) {
        if (totalSeconds >= range.start && totalSeconds < range.end) {
            document.getElementById("time-name").textContent = `| ${range.label} ⌛ (${range.end -totalSeconds} 초 남음)|`;
            return; 
        }
    }
}

setInterval(updateClockAndBar, 1000);
