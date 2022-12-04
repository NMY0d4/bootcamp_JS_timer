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

////////////////////////////////////////////////////
//        REQUEST
/////////////////////////////////////

const prom = fetch("https://swapi.py4e.com/api/planets/")
    .then((res) => {
        if (!res.ok) throw new Error(`Status Code Error: ${res.status}`);
        return res.json();
    })
    .then((data) => {
        const filmURL = data.results[0].films[1];
        return fetch(filmURL);
    })
    .then((filmData) => filmData.json())
    .then((filmDataJson) => console.log(filmDataJson.title))
    .catch((err) => console.error(err));
