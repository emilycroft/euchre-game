class Card {
  constructor(suit, face, value) {
    this.suit = suit
    this.face = face
    this.defaultValue = value
  }

  cardName() {
    return `${this.face} of ${this.suit}!`
  }

  value(trump) {
    if (this.suit === trump && this.face === 'J') {
      return this.defaultValue + 20
    } else if (this.suit === trump ) {
      return this.defaultValue + 10
    } else if (this.face === 'J' && color(trump) === color(this.suit)) {
      return this.defaultValue + 19
    } else {
      return this.defaultValue
    }
  }
}

function color(str) {
  if (str === "spades" || str === "clubs") {
    return "black"
  } else if (str === "hearts" || str === "diamonds") {
    return "red"
  }
}
