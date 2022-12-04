const diceResult = document.querySelector("#dice-result");

const myPromise = (NombresDeFaces, duration) => {
    const rollDice = (res, rej) =>
        setTimeout(() => {
            const rand = Math.floor(Math.random() * NombresDeFaces) + 1;
            return rand > 3
                ? res(`gagné, résultat du dé: ${rand}`)
                : rej(`perdu, résultat du dé: ${rand}`);
        }, 1000 * duration);
    return new Promise((res, rej) => {
        rollDice(res, rej);
    });
};

myPromise(10, 5)
    .then((res) => (diceResult.innerHTML = res))
    .catch((rej) => (diceResult.innerHTML = rej));
