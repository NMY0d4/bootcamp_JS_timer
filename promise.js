const myPromise = (NombresDeFaces) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const rand = Math.floor(Math.random() * NombresDeFaces) + 1;
            return rand > 3
                ? res(console.log(`gagné, résultat du dé: ${rand}`))
                : rej(console.error(`perdu, résultat du dé: ${rand}`));
        }, 2000);
    });
};
