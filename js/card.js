class Card {
  constructor(suit, face, value, color) {
    this.suit = suit
    this.face = face
    this.color
    this.defaultValue = value
  }

  cardName() {
    return `${this.face} of ${this.suit}!`
  }

  value(trump) {

    if (this.suit === trump && this.face = 'J') {
      return this.defaultValue + 15
    } else if (this.suit === trump ) {
      return this.defaultValue + 10
    } else if (this.suit)
  }
}
