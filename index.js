function flipCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('flip');
}


class Deck {
    constructor() {
        this.cards = [];
        const vals = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
        const syms = ["♠", "♦", "♣", "♥"];
        const container = document.getElementById("card-area");

        for (const sym of syms) {
            for (const val of vals) {
                const card = createCardElement(val, sym);
                container.appendChild(card);
                this.cards.push(new Card(val, sym));
            }
        }
    }
}


class Card{
    constructor(val,sym){
        this.val = val
        this.sym = sym
    }
}

function createCardElement(value, symbol) {
    const card = document.createElement('div');
    card.className = 'card';

    const front = document.createElement('div');
    front.className = 'card-front';

    const valDiv = document.createElement('div');
    valDiv.className = 'value';
    valDiv.textContent = value;

    const symDiv = document.createElement('div');
    symDiv.className = 'symbol';
    symDiv.textContent = symbol;

    front.appendChild(valDiv);
    front.appendChild(symDiv);

    const back = document.createElement('div');
    back.className = 'card-back';

    if (symbol === "♦" || symbol === "♥") {
        valDiv.style.color = "red";
        symDiv.style.color = "red";
    }
      
    card.appendChild(front);
    card.appendChild(back);

    const container = document.createElement('div');
    container.className = 'card-container';
    container.appendChild(card);

    return container;
}

window.onload = () => {
    const deck = new Deck();
};