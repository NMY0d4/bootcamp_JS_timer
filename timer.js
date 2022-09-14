class Timer {
    _interval;

    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
    }

    start = () => {
        this.onStart && this.onStart();

        this.tick();
        this._interval = setInterval(this.tick, 1000);
    };

    pause = () => {
        clearInterval(this._interval);
    };

    tick = () => {
        this.onTick && this.onTick();

        if (this.timeRemaining <= 0) {
            this.onComplete && this.onComplete();
            this.pause();
        } else {
            this.timeRemaining = this.timeRemaining - 1;
        }
    };

    get timeRemaining() {
        return +this.durationInput.value;
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}
