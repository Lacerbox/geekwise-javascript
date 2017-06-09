// define an interface for a Card; a Card should have a suit and rank value
interface ICard {
	suit:string;
	rank:string;
}

@fancy
class Deck {
	private readonly numberOfCards: number = 52;
	private cardSuits: Array<string> = ["H", "S", "C", "D"];
	private cardRanks: Array<string> = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

	public cardsPicked:ICard[] = [];

	public getCardsRemaining():number {
		return this.numberOfCards - this.cardsPicked.length;
	}

	public createCardPicker():() => ICard {
		return () => {
		  if (!this.getCardsRemaining()) return;

			let card:ICard;

			const suit = this.cardSuits[Math.floor(Math.random() * this.cardSuits.length)];
			const rank = this.cardRanks[Math.floor(Math.random() * this.cardRanks.length)];

			card = {
				suit,
				rank
			};

			this.cardsPicked.push(card);

			return card;
		};
	}
}

// here is your decorator, implemented for you, but you still have to use it
// notice that it must override a property in your class
function fancy<T extends { new (...args: any[]): {} }>(constructor: T) {
	return class extends constructor {
		cardSuits = ["♡", "♤", "♧", "♢"];
	}
}
