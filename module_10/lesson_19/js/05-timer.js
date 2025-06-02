/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */


const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".clockface");

class Timer {

    constructor({ onTick }) {
        this.onTick = onTick;
        this.isActive = false;
        this.intervalId = null;

        this.init();
    }

    init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    start() {
        if(this.isActive) {
            return;
        }

        const startTime = Date.now();
        this.isActive = true;
        
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = this.getTimeComponents(deltaTime);
            
            this.onTick(time);
            
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.init();
        this.isActive = false;
    }

    getTimeComponents(time) {
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minutes = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000))
        return { hours, minutes, secs }
    }

    pad(value) {
        return String(value).padStart(2, "0");
    }
}

const timer = new Timer({
    onTick: update
});

startBtn.addEventListener("click", timer.start.bind(timer));
stopBtn.addEventListener("click", timer.stop.bind(timer));

function update({ hours, minutes, secs }) {
    clockface.innerHTML = `${hours}:${minutes}:${secs}`;
}
