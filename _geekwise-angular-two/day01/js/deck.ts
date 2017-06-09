// define an interface for a Card; a Card should have a suit and number value

interface Card {
  suit: string;
  rank: string;
}

// define a class for a Deck (this includes implementation details):

// "numberOfCards," "cardSuits," and "cardNumbers" should be private properties - this is done for you

// public pieces should include:
//  - an array of cards picked
//  - number of cards left in the deck
//  - a createCardPicker method which returns a function to draw a card
//  - createCardPicker function should return a Card from our above interface
//  - once done, apply the fancy decorator to get all suave-like

//	private readonly numberOfCards: number = 52;
//	private cardSuits: Array<string> = ["H", "S", "C", "D"];
//	private cardNumbers: Array<string> = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

class Deck {
  public readonly numberOfCards: number = 52;

  shuffleDeck():void {
    console.log("Deck Shuffled");
  }
}


// here is your decorator, implemented for you, but you still have to use it
// notice that it must override a property in your class
function fancy<T extends { new (...args: any[]): {} }>(constructor: T) {
	return class extends constructor {
		cardSuits = ["♡", "♤", "♧", "♢"];
	}
}

// instance the class and use it
var deckInstance = new Deck();
console.log(deckInstance.numberOfCards);
