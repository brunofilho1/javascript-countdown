const countdown = () => {
    const countDate = new Date('Nov 30, 2021 00:00:00').getTime();
    const todayDate = new Date().getTime();
    const gap = countDate - todayDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayDisplay = Math.floor(gap / day);
    const hourDisplay = Math.floor((gap % day) / hour);
    const minuteDisplay = Math.floor((gap % hour) / minute);
    const secondDisplay = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = dayDisplay;
    document.querySelector('.hour').innerText = hourDisplay;
    document.querySelector('.minute').innerText = minuteDisplay;
    document.querySelector('.second').innerText = secondDisplay;
}

setInterval(countdown, 1000);