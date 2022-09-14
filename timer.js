class Timer {
    _interval;
    _tickDuration = 10;

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
        this.onStart && this.onStart(this.timeRemaining);

        this.tick();
        this._interval = setInterval(this.tick, this._tickDuration);
    };

    pause = () => {
        clearInterval(this._interval);
    };

    tick = () => {
        this.onTick && this.onTick(this.timeRemaining);

        if (this.timeRemaining <= 0) {
            this.onComplete && this.onComplete();
            this.pause();
        } else {
            this.timeRemaining = this.timeRemaining - this._tickDuration / 1000;
        }
    };

    get timeRemaining() {
        return +this.durationInput.value;
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}
