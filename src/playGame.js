class playGame{

  constructor(game = new Game()){
    this.game = game
    this.handler = function(e){ this.play(e)}.bind(this)
    document.body.addEventListener('keydown', this.handler)
  }


  drawBoard(){
    for (var row = 0; row < this.game.board.length; row++) {
      for (var col = 0; col < this.game.board[row].length; col++) {
        var cell = document.getElementById("cell" + row + col);
          cell.innerHTML = this.game.board[row][col];
      }
    }
  }

  play(e){
    this.game.playerMove(e.key)
    this.drawBoard()
    this.gameText()
    this.game.changePlayer()
  }

  gameText() {
    var text
    if(this.game.winCheck() !== undefined) {
      text = document.getElementById("gameText")
      text.innerHTML = this.game.winCheck()
      document.body.removeEventListener('keydown', this.handler);
    }
  }
}
