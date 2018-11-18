class Game{
  constructor(){
    this.board = [[' ',' ',' ',' ',' ',' '],
                  [' ',' ',' ',' ',' ',' '],
                  [' ',' ',' ',' ',' ',' '],
                  [' ',' ',' ',' ',' ',' '],
                  [' ',' ',' ',' ',' ',' '],
                  [' ',' ',' ',' ',' ',' '],
                  [' ',' ',' ',' ',' ',' ']]
    this.currentPlayer = "X"
  }

  playerMove(column){
    console.log("selected")
    this.board = this.board.reverse()
    var rowCount = 0
    var totalRows = this.board.length - 1
    while (rowCount <= totalRows) {
      if (this.board[rowCount][column - 1] === ' '){
        this.board[rowCount][column - 1] = this.currentPlayer
        break;
      }
      rowCount ++
    }
    this.board = this.board.reverse()
  }

  changePlayer(){
    if (this.currentPlayer === "X") {
      this.currentPlayer = "O"
    } else {
      this.currentPlayer = "X"
    }
  }

  winCheck(){
    let winner = `Player ${this.currentPlayer} Wins!`
    // vertical check
    for (var x = 0; x < this.board.length - 3; x++) {
      for (var y = 0; y < this.board[0].length; y++) {
        if (this.board[x][y] === this.currentPlayer
            && this.board[x+1][y] === this.currentPlayer
            && this.board[x+2][y] === this.currentPlayer
            && this.board[x+3][y] === this.currentPlayer){
          return winner
        }
      }
    }
    // horizontal check
    for (var y = 0; y < this.board[0].length - 3; y++) {
      for (var x = 0; x < this.board.length; x++) {
        if (this.board[x][y] === this.currentPlayer
            && this.board[x][y+1] === this.currentPlayer
            && this.board[x][y+2] === this.currentPlayer
            && this.board[x][y+3] === this.currentPlayer){
          return winner
        }
      }
    }
    // descending diagonal
    for (var x = 0; x < this.board.length - 3; x++) {
      for (var y = 0; y < this.board[0].length - 3; y++) {
        if (this.board[x][y] === this.currentPlayer
            && this.board[x+1][y+1] === this.currentPlayer
            && this.board[x+2][y+2] === this.currentPlayer
            && this.board[x+3][y+3] === this.currentPlayer){
          return winner
        }
      }
    }
    // ascending diagonal
    for (var x = 3; x < this.board.length; x++) {
      for (var y = 0; y < this.board[0].length - 3; y++) {
        if (this.board[x][y] === this.currentPlayer
            && this.board[x-1][y+1] === this.currentPlayer
            && this.board[x-2][y+2] === this.currentPlayer
            && this.board[x-3][y+3] === this.currentPlayer){
          return winner
        }
      }
    }
  }
}
