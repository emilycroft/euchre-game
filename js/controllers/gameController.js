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

  showHand(player) {
    this.currentPlayer.textContent = player.name
    this.displayCards(player.hand)
  }

  displayCards(cards) {
    var string = ""
    for (var i = 0; i < cards.length; i++) {
      string += `<li>${cards[i].cardName()}</li>`
    }
    this.hand.innerHTML = string
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
