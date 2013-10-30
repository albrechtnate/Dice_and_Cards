//Cards.js
//Nathaniel Albrecht
//I know there are a lot of global variables which is bad and I don't think the list of cards is done the best way, but meh.

function Player(name) {
	
    this.init = function (name) {
		this.name = name;
		this.score = 0;
	};
    
    this.init(name);
    
}

function Deck(ranks, suits) {
    
    listOfCards = [];
	
    this.init = function (ranks, suits) {
        for (suit in suits){
            for (rank in ranks) {
                listOfCards.push(new Card(rank, suit));
            }
        }
	};
        
	this.shuffle = function () {
        var temp;
        for (i=0; i<4; i++) {
            for (currentNum=0; currentNum<listOfCards.length; currentNum++){
                randomNum = Math.floor(Math.random() * listOfCards.length);
                temp = listOfCards[currentNum];
                listOfCards[currentNum] = listOfCards[randomNum];
                listOfCards[randomNum] = temp;
            }
        }
	};
        
	this.draw = function () {
		return listOfCards.shift();
	};
        
    this.place = function (card) {
        listOfCards.push(card);
    };
        
    this.cut = function () {
        index = listOfCards.length - Math.floor((Math.random() * (listOfCards.length/2.2)));
        listOfCards = listOfCards.slice(index).concat(listOfCards.slice(0, index));
    };

    this.show = function () {
        output = "";
        for (card in listOfCards) {
            output += (listOfCards[card] + " ");
         }
        return output;
	};
        
	this.init(ranks, suits);

}
    
function Card(rank, suit) {

	ranks = ['Ace', 'Two', 'Three', 'Four', "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
	suits = ['Clubs', 'Spades','Diamonds', 'Hearts'];
	
    this.init = function (rank, suit) {
        this.rank = rank;
        this.suit = suit;
	};
        
	this.getRank = function () {
        return this.rank;
	};
    
	this.getSuit = function () {
        return this.suit;
	};
        
	this.setRank = function (rank) {
        this.rank = rank;
	};
    
	this.setSuit = function (suit) {
        this.suit = suit;
	};

    this.interpertCard = function () {
        return ranks[this.rank] + " of " + suits[this.suit];
	};
    
    this.add = function (n) {
        return Number(this.getRank()) + Number(listOfCards[n].getRank());
	};
        
	this.init(rank, suit);

}
    
deck = new Deck([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [0, 1, 2, 3]);

function printCards() {
    
    for (card in listOfCards) {
        console.log(listOfCards[card].interpertCard());
    }
    
}

printCards();

document.write("<h1>Cards</h1><h3>Nathaniel Albrecht</h3><p>Open the Chrome console to interact with the cards. You may <em>deck.shuffle();</em> <em>deck.cut();</em> <em>deck.draw();</em> or <em>deck.place(card);</em><br><br>To reprint out all the cards after interacting with them in one of these ways, type <em>printCards();</em><br><br>A few other \"hidden\" methods are <em>listOfCards[card].getRank();</em> <em>listOfCards[card].getSuit();</em> <em>listOfCards[card].setRank(rank);</em> <em>listOfCards[card].setSuit(suit);</em> <em>listOfCards[card].interpertCard();</em> and <em>listOfCards[carda].add(cardb);</em><style>body{font-family:sans-serif;padding: 1em;color:#34495e;}h1{margin-bottom:0;}h3{margin-bottom: 1.5em;margin-top: 0;font-weight:normal;}</style>");