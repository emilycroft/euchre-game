class Player {
  constructor(playerDiv, name){
    this.hand = []
    this.name = name
    this.controller = new PlayerController(playerDiv)
  }

  addCards(card) {
    this.hand.push(...card)
  }

  showCards(){
    this.controller.showHand(this.hand)
  }

}

