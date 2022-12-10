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

// async function greet() {
//     return "HELLO";
// }
// greet().then((val) => {
//     console.log("PROMISE RESOLVED WITH:", val);
// });

// async function add(x, y) {
//     if (typeof x !== "number" || typeof y !== "number") {
//         throw "X and Y must be numbers!";
//     }
//     return x + y;
// }

// console.log(add(5, 0.3));

// async function getPlanets() {
//     try {
//         const planets = await axios.get("https://swapi.py4e.com/api/planets/");
//         console.log(planets);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getPlanets();

// async function get3Pokemon() {
//     const poke1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
//     const poke2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
//     const poke3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
//     const pokemons = await Promise.all([poke1, poke2, poke3]);
//     pokemons.forEach((pok) => console.log(pok.data.name));
// }

// get3Pokemon();

changBodyColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay * 1000);
    });
};

lightShow = async () => {
    await changBodyColor("teal", 1);
    await changBodyColor("pink", 1);
    await changBodyColor("indigo", 1);
    await changBodyColor("violet", 1);
};
// lightShow();
