const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute(
            "stroke-dashoffset",
            (perimeter * timeRemaining) / duration - perimeter
        );
    },
    onComplete() {
        console.log("Timer is completed");
    },
});
////////////////////////////////////////////////////////////////////////////////////
//
//                           JUST FOR FUN TRAINING
//
////////////////////////////////////////////////////////////////////////////////////
const myDeck = {
    deck: [],
    drawCards: [],
    suits: ["hearts", "diamonds", "spades", "clubs"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    initializeDeck() {
        const { suits, values, deck } = this;
        const allValues = values.split(",");
        allValues.forEach((value) =>
            suits.forEach((suit) => deck.push({ value, suit }))
        );
        // return deck;
        return this;
    },
    drawCard() {
        const card = this.deck.pop();
        this.drawCards.push(card);
        return card;
    },
    drawMultiple(numCards) {
        const cards = [];
        for (let i = 0; i < numCards; i++) {
            cards.push(this.drawCard());
        }
        return cards;
    },

    shuffle() {
        const { deck } = this;
        // loop over array backwards
        for (let i = deck.length - 1; i > 0; i--) {
            // pick random index before current element
            let j = Math.floor(Math.random() * (i + 1));
            // swap
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    },
};

// console.log(myPassword.threeArrayForPass());

/////////////////////////////////////////////////////////////////////////
//////////////// TRAINING Day

// const inputs = document.querySelectorAll("input");
// inputs.forEach((input, i) =>
//     console.log(`i y a ${i + 1} inputs dans ce document.`)
// );

const todo = document.querySelector("#todos .todo");

todo.classList.add("done");
