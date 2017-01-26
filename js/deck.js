
class Deck {
  constructor() {
    this.cards = []
    this.load()
    this.shuffle()

    return this.cards
  }

  load() {
    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < values.length; j++) {
        this.cards.push(new Card(suits[i], values[j], j))
      }
    }
  } // end load()

  shuffle() {
    let deck         = this.cards,
        currentIndex = deck.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = deck[currentIndex];
      deck[currentIndex] = deck[randomIndex];
      deck[randomIndex] = temporaryValue;
    }
  }

  deal() {
  }
}
