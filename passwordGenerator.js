const myPassword = {
    letter: "abcdefghijklmnopqrstuvwxyz",
    symbolAndSign: "&é'(-è_çà)=#{[|`^@]},;:!?./§",
    numbers: "0123456789",
    password: [],

    _threeArrayForPass() {
        const { letter, symbolAndSign, numbers } = this;
        const arrLower = letter.split("");
        const arrUpper = letter.toUpperCase().split("");
        const arrLettersUpAndLow = [...arrLower, ...arrUpper];
        const arrNumbers = numbers.split("");
        const arrSymbAndSign = symbolAndSign.split("");

        return { arrLettersUpAndLow, arrNumbers, arrSymbAndSign };
    },

    _shuffle(array) {
        // loop over array backwards
        for (let i = array.length - 1; i > 0; i--) {
            // pick random index before current element
            let j = Math.floor(Math.random() * (i + 1));
            // swap
            [array[i], array[j]] = [array[j], array[i]];
        }
    },

    passwordGenerator(number) {
        if (!isFinite(number) || number < 8)
            return console.log(
                `vous devez entrer un chiffre égal ou supérieur à 8`
            );
        const { arrLettersUpAndLow, arrNumbers, arrSymbAndSign } =
            this._threeArrayForPass();
        const addInPassword = (array) =>
            this.password.push(
                array[Math.floor(Math.random() * array.length) + 1 - 1]
            );

        for (let i = number; i > 0; i--) {
            if (i < 3) {
                addInPassword(arrSymbAndSign);
            } else if (i >= 3 && i < 5) {
                addInPassword(arrNumbers);
            } else {
                addInPassword(arrLettersUpAndLow);
            }
        }
        this._shuffle(this.password);
        return this.password.join("");
    },
};

console.log(myPassword.passwordGenerator(12));
