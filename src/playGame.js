class playGame{

  constructor(game = new Game()){
    this.game = game
    this.clickable(true)
    this.winCheck()
  }


  drawBoard(){
    for (var row = 0; row < this.game.board.length; row++) {
      for (var col = 0; col < this.game.board[row].length; col++) {
        var cell = document.getElementById("cell" + row + col);
          cell.innerHTML = this.game.board[row][col];
      }
    }
  }

  play(num){
    this.game.playerMove(num)
    this.drawBoard()
    this.gameCheckText()
    this.game.changePlayer()
  }

  gameCheckText() {
    var text
    if(this.game.winCheck() !== undefined) {
      text = document.getElementById("gameText")
      text.innerHTML = this.game.winCheck()
      this.clickable(false)
    } else {
      text = document.getElementById("gameText")
      text.innerHTML = `${this.game.currentPlayer}'s turn, select a column`
    }
  }

  clickable(gameState) {
    var local = this
    for (var num = 1; num < 7; num++) (function(num) {
      document.getElementById(`${num}`).onclick = function() {
        if(gameState === true) {
          local.play(num)
        } else {
          return null
        }
      };
    })(num)
  }
}
