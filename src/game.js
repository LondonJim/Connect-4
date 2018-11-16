class Game{
  constructor(){
    this.board = [['.','.','.','.','.','.'],
                       ['.','.','.','.','.','.'],
                       ['.','.','.','.','.','.'],
                       ['.','.','.','.','.','.'],
                       ['.','.','.','.','.','.'],
                       ['.','.','.','.','.','.'],
                       ['.','.','.','.','.','.']]
  }

  playerMove(column){
    this.board = this.board.reverse()
    var rowCount = 0
    var totalRows = this.board.length - 1
    while (rowCount <= totalRows) {
      if (this.board[rowCount][column - 1] === '.'){
        this.board[rowCount][column - 1] = '0'
        this.board = this.board.reverse()
        break;
      }
      rowCount ++
    }
  }
}
