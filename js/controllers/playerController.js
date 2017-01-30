class PlayerController {
  constructor(playerDiv) {
    // this.playerDiv = document.getElementById(playerDiv)
    // this.cards = this.playerDiv.getElementsByClassName('cards')[0]
    // this.playedCard = this.playerDiv.getElementsByClassName('played-card')[0]
  }

  showCard(card) {
    this.playedCard.textContent = card.cardName()
  }

  showHand(cards) {
    var string = ""
    for (var i = 0; i < cards.length; i++) {
      string += `<li>${cards[i].cardName()}</li>`
    }
    this.cards.innerHTML = string

  }
}
