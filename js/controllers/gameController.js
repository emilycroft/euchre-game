class GameController {
  constructor() {
    this.status = document.getElementById('status')
    // this.button = document.getElementById('nextRound')
    this.game = new Game()
    this.constructor.controller = this
    this.game.play()
  }

  updateStatus(str) {
    this.status.textContent = str
  }

  makeButton(playerDiv) {
    var node = document.createElement('button')
    var textnode = document.createTextNode("Order it up")
    var node2 = document.createElement('button')
    var textnode2 = document.createTextNode("Pass")
    node.addEventListener('click', this.orderItUp)
    node2.addEventListener('click', this.pass)
    node.id = "order"
    node2.id = "pass"
    node.appendChild(textnode)
    node2.appendChild(textnode2)
    document.getElementById(playerDiv).appendChild(node)
    document.getElementById(playerDiv).appendChild(node2)
  }

  orderItUp() {
    alert('yep!!')
  }

  pass() {
    alert('nope!!')
  }
}

GameController.controller = null
