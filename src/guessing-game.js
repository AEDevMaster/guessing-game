class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.middle = null;
    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        console.log(this.min, this.max)
        this.middle = Math.round((this.max + this.min) / 2)

        return this.middle;
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;
