class GameController {
  constructor() {
    this.status = document.getElementById('status')
    this.game = new Game()
    this.constructor.controller = this
    this.currentPlayer = document.getElementById('player-name')
    this.game.play()
    this.hand = document.getElementById('player-hand')
    this.round = GameController.controller.game.round
    this.startButton()
  }

  updateStatus(str) {
    this.status.textContent = str
  }

  removeAllButtons(div){
    var actiony = document.getElementById(div)

    while (actiony.firstChild) actiony.removeChild(actiony.firstChild);
  }

  addBiddingButtons(){
    var bid = this.round.bidding.bind(this.round)
    var start = this.round.startPlay.bind(this.round)
    this.createButton( bid, 'Pass!', 'player-actions', 'pass')
    this.createButton( start, 'Order it Up!', 'player-actions', 'order-it' )


  }

  selectSuit(){
    var bid = this.round.bidding.bind(this.round)
    var aChoiceHasBeenMade = this.round.dynamiteDynamic
    this.createButton( bid, 'Pass!', 'player-actions', 'pass')

    this.createButton( aChoiceHasBeenMade, 'Diamonds', 'player-actions', 'diamonds' )
    this.createButton( aChoiceHasBeenMade, 'Clubs', 'player-actions', 'clubs' )
    this.createButton( aChoiceHasBeenMade, 'Hearts', 'player-actions', 'hearts' )
    this.createButton( aChoiceHasBeenMade, 'Spades', 'player-actions', 'spades' )

  }

  showHand(player) {
    var displayCards = this.displayCards.bind(player)
    this.currentPlayer.textContent = player.name
    this.createButton( displayCards, 'Show Cards', 'player-actions', 'show-cards')
  }

  displayCards() {
    var string = ""
    for (var i = 0; i < this.hand.length; i++) {
      string += `<li>${this.hand[i].cardName()}</li>`
    }
  
    if (GameController.controller.round.caller != null) {
      GameController.controller.letTheGamesBegin(this.hand)
    } else {
      GameController.controller.biddingButtons(string)
    }
  }

  letTheGamesBegin(hand) {

  }

  biddingButtons(string) {

     GameController.controller.removeAllButtons('player-actions')
    if (GameController.controller.round.counter > 4) {
      GameController.controller.selectSuit()
    } else { 
      GameController.controller.addBiddingButtons()
    }
    GameController.controller.hand.innerHTML = string
  }

  hideCards() {
     GameController.controller.hand.innerHTML = ''

  }

  startButton() {

    var bid = this.round.bidding.bind(this.round)

    this.createButton( bid, 'Start Round!', 'action-items', 'start-playing')
  }

  createButton(callback, name, div, id) {
    let  text = document.createTextNode(name)
        ,node = document.createElement('button');
    node.appendChild(text)
    node.id = id
    node.addEventListener('click', callback)
    document.getElementById(div).appendChild(node)
  }



  makeButton(playerDiv) {
    // var node = document.createElement('button')
    // var textnode = document.createTextNode("Order it up")
    // var node2 = document.createElement('button')
    // var textnode2 = document.createTextNode("Pass")
    // node.addEventListener('click', this.orderItUp)
    // node2.addEventListener('click', this.pass)
    // node.id = "order"
    // node2.id = "pass"
    // node.appendChild(textnode)
    // node2.appendChild(textnode2)
    // document.getElementById(playerDiv).appendChild(node)
    // document.getElementById(playerDiv).appendChild(node2)
  }

  orderItUp() {
    alert('yep!!')
  }

  pass() {
    alert('nope!!')
  }
}

GameController.controller = null
