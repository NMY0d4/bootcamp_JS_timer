const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
class Timer {
    _interval;

    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
    }

    start = () => {
        this.tick();
        this._interval = setInterval(this.tick, 1000);
    };

    tick = () => {
        this.timeRemaining = this.timeRemaining - 1;
    };

    pause = () => {
        clearInterval(this._interval);
    };

    get timeRemaining() {
        return +this.durationInput.value;
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}

const timer = new Timer(durationInput, startButton, pauseButton);
