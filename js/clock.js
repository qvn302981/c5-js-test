function myClock() {
    const seconds = document.getElementById("second");
    const minute = document.getElementById("minute");
    const hour = document.getElementById("hour");
    const day = document.getElementById("day");
    const span = document.getElementById("span");


    const now = new Date();

    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    if (span) {
        span.innerText = daysOfWeek[now.getDay()];
    }

    if (hour) {
        hour.innerText = now.getHours().toString();
    }
    if (minute) {
        minute.innerText = now.getMinutes().toString();
    }
    if (seconds) {
        seconds.innerText = now.getSeconds().toString();
    }
};
setInterval(myClock, 1000);
myClock();