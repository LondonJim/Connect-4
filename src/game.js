class Game{
  constructor(){
    this.board = [['.','.','.','.','.','.'],
                  ['.','.','.','.','.','.'],
                  ['.','.','.','.','.','.'],
                  ['.','.','.','.','.','.'],
                  ['.','.','.','.','.','.'],
                  ['.','.','.','.','.','.'],
                  ['.','.','.','.','.','.']]
    this.currentPlayer = "0"
  }

  playerMove(column){
    this.board = this.board.reverse()
    var rowCount = 0
    var totalRows = this.board.length - 1
    while (rowCount <= totalRows) {
      if (this.board[rowCount][column - 1] === '.'){
        this.board[rowCount][column - 1] = this.currentPlayer
        this.board = this.board.reverse()
        this.changePlayer()
        break;
      }
      rowCount ++
    }
  }

  changePlayer(){
    if (this.currentPlayer === "0") {
      this.currentPlayer = "1"
    } else {
      this.currentPlayer = "0"
    }
  }
}
