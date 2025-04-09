function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Deck {
    constructor() {
        this.cards = [];
        const vals = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
        const syms = ["♠", "♦", "♣", "♥"];

        for (const sym of syms) {
            for (const val of vals) {
                const card = new Card(val, sym)
                this.cards.push(card);
            }
        }
    }

    shuffle() {
        let shuffledDeck = []
        for(let i =0;i<52; i++){
            let rand = getRandomInt(0,this.cards.length-1);
            shuffledDeck[i] = this.cards[rand];
            this.cards.splice(rand, 1);
        }
        this.cards = shuffledDeck;
    }

    display(){
        const container = document.getElementById("card-area");
        for(const card of this.cards){
            const cardElement = createCardElement(card);
            container.appendChild(cardElement);
        }
    }
}


class Card{
    constructor(val,sym){
        this.val = val
        this.sym = sym
    }
}

function createCardElement(cardObj) {
    const value = cardObj.val
    const symbol = cardObj.sym
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
    // container.classList.add('stack');
    container.appendChild(card);
    // card.classList.toggle('flip');

    return container;
}

window.onload = () => {
    const deck = new Deck();
    deck.shuffle()
    deck.display()
};

