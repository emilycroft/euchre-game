class GameController {
  constructor() {
    this.status = document.getElementById('status')
    // this.button = document.getElementById('nextRound')
    this.addEventListeners()
    this.game = new Game()

    this.game.start()
  }

  addEventListeners() {
    let self = this
    let buttons = document.getElementsByClassName('trump')
    
    for (var i = buttons.length - 1; i >= 0; i--) {
      buttons[i].addEventListener('click', function() {
      self.game.trump = this.id
      self.game.play()
    })
    }

    
  }

  updateStatus(str) {
    this.status.textContent = str
   
  }
}
