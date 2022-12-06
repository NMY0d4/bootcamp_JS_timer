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

// const checkStatusAndParse = (res) => {
//     if (!res.ok) throw new Error(`Status Code Error: ${res.status}`);
//     return res.json();
// };

// const printPlantets = (data) => {
//     console.log("Loaded 10 more planets...");
//     data.results.forEach((el) => {
//         console.log(el.name);
//     });
//     return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = "https://swapi.py4e.com/api/planets/") => {
//     return fetch(url);
// };

// fetchNextPlanets()
//     .then(checkStatusAndParse)
//     .then(printPlantets)
//     .then(fetchNextPlanets)
//     .then(checkStatusAndParse)
//     .then(printPlantets)
//     .then(fetchNextPlanets)
//     .then(checkStatusAndParse)
//     .then(printPlantets)
//     .catch((err) => console.error(err));

async function greet() {
    return "HELLO";
}
greet().then((val) => {
    console.log("PROMISE RESOLVED WITH:", val);
});

async function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw "X and Y must be numbers!";
    }
    return x + y;
}

console.log(add(5, 0.3));

async function getPlanets() {
    const planets = await axios.get("https://swapi.py4e.com/api/planets/");
    console.log(planets);
}

getPlanets();
