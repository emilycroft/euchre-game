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

    for (var i = 0; i < suits.length; i++) {
      this.createButton( aChoiceHasBeenMade, suits[i], 'player-actions', suits[i])
      suits[i]
    }

  }

  showHand(player) {
    if (this.round.counter > 8 ) {
      this.round.counter = 0
      GameController.controller.game.play()
      GameController.controller.game.round.bidding()
    } else if (this.trick) {

    }
    var displayCards = this.displayCards.bind(player)
    this.currentPlayer.textContent = player.name
    this.createButton( displayCards, 'Show Cards', 'player-actions', 'show-cards')
  }

  displayCards() {
    GameController.controller.currentPlayer.textContent = this.name
    GameController.controller.removeAllButtons('player-actions')
    var string = ""
    for (var i = 0; i < this.hand.length; i++) {
      string += `<li>${this.hand[i].cardName()}</li>`
    }

    if (GameController.controller.trick) {
        GameController.controller.pickACardAnyCard(this.hand)
    } else if (GameController.controller.round.caller != null ) {
      GameController.controller.letTheGamesBegin(this.hand)
    } else {
      GameController.controller.biddingButtons(string)
    }
  }

  letTheGamesBegin(hand) {
    this.trick = new Trick(GameController.controller.game.players[0])
    this.pickACardAnyCard(hand)

  }

  trickWinner(winner) {
    debugger
    if (winner === this.game.playerOne || winner === this.game.playerThree) {
      this.round.tricksWon.team1 += 1
    } else if (winner === this.game.playerTwo || winner === this.game.playerFour) {
      this.round.tricksWon.team2 += 1
    }
  }


  pickACardAnyCard(hand) {

    for (var i = 0; i < hand.length; i++) {
      let node = this.createButton( this.selectCard, hand[i].cardName(), 'player-actions', 'card' + i)
      node.setAttribute('data-cardid', i)
    }

  }

  selectCard() {
    let i = this.getAttribute('data-cardid')
    GameController.controller.trick.playCard(i, GameController.controller.round.players[3])
    GameController.controller.round.nextPlayer()

  }

  biddingButtons(string) {
    if (GameController.controller.round.counter > 8) {
      GameController.controller.game.play()
      GameController.controller.game.round.bidding()
    } else if (GameController.controller.round.counter > 4) {
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
    return node
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
