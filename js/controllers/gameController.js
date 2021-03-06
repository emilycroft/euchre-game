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
    this.status.innerHTML = str
  }

  removeAllButtons(div){
    var actiony = document.getElementById(div)

    while (actiony.firstChild) actiony.removeChild(actiony.firstChild);
  }

  start() {
    GameController.controller.round.startPlay.bind(GameController.controller.round)()
    GameController.controller.updateStatus(`<p class="mb0">Trump: ${GameController.controller.round.trump}</p> <p class="mv1">The dealer is ${GameController.controller.round.dealer.name}</p><p class="mt0"> Caller: ${GameController.controller.round.caller.name}</p>`)
  }

  addBiddingButtons(){
    var bid = this.round.bidding.bind(this.round)
    this.createButton( bid, 'Pass', 'player-actions', 'pass')
    this.createButton( this.start, 'Order it Up', 'player-actions', 'order-it' )
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
    if (this.trick) {
      var picker = this.enclosedPicker.bind(player)

      this.createButton( picker, "Show Cards", 'player-actions', 'show-cards')
    } else if ( this.round.counter < 8) {
      var displayCards = this.displayCards.bind(player)
      this.currentPlayer.textContent = player.name
      this.createButton( displayCards, 'Show Cards', 'player-actions', 'show-cards')
    } else {
      this.round.counter = 0
      GameController.controller.game.play()
      GameController.controller.game.round.bidding()
    }
   
  }

  displayCards() {
    GameController.controller.currentPlayer.textContent = this.name
    GameController.controller.removeAllButtons('player-actions')
    var string = ""
    for (var i = 0; i < this.hand.length; i++) {
      string += `<li>${this.hand[i].cardName()}</li>`
    }

    if (GameController.controller.trick) {
        GameController.controller.showHand(this)
    } else if (GameController.controller.round.caller != null ) {
      GameController.controller.letTheGamesBegin(this)
    } else {
      GameController.controller.biddingButtons(string)
    }
  }

  letTheGamesBegin(player) {
    this.trick = new Trick(GameController.controller.game.players[0])
    this.pickACardAnyCard(player)

  }

  trickWinner(winner) {
    if (winner === this.game.playerOne || winner === this.game.playerThree) {
      this.addATally('team1')
      this.round.tricksWon.team1 += 1
    } else if (winner === this.game.playerTwo || winner === this.game.playerFour) {
      this.addATally('team2')
      this.round.tricksWon.team2 += 1
    }

    this.trick = new Trick(winner)
    this.displayCards.bind(winner)()
  }

  addATally(team) {
    document.getElementById(team).append('l')
  }

  enclosedPicker(){
    var that = this
    GameController.controller.removeAllButtons('player-actions')
    for (var i = 0; i < that.hand.length; i++) {
      let selectedCard = GameController.controller.selectCard(that)
      let node = GameController.controller.createButton( selectedCard, that.hand[i].cardName(), 'player-actions', 'card' + i)
      node.setAttribute('data-cardid', i)
    }
  }


  pickACardAnyCard(player) {

    for (var i = 0; i < player.hand.length; i++) {
      let selectedCard = this.selectCard(player)
      let node = this.createButton( selectedCard, player.hand[i].cardName(), 'player-actions', 'card' + i)
      node.setAttribute('data-cardid', i)
    }

  }

  selectCard(player) {
    return function(){
      let i = this.getAttribute('data-cardid')
      GameController.controller.trick.playCard(i, player)
      GameController.controller.round.nextPlayer()
    }
  }

  // selectCard() {
  //   let i = this.getAttribute('data-cardid')

  //   GameController.controller.trick.playCard(i, player)
  //   GameController.controller.round.nextPlayer()

  // }

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
    this.createButton( bid, 'Start Round', 'action-items', 'start-playing')
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
}

GameController.controller = null
