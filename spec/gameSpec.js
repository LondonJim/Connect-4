describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  })

  it ("player should be able to add a token to a column", function() {
    game.playerMove(1)
    expect(game.board).toEqual([[' ',' ',' ',' ',' ',' '],
                                [' ',' ',' ',' ',' ',' '],
                                [' ',' ',' ',' ',' ',' '],
                                [' ',' ',' ',' ',' ',' '],
                                [' ',' ',' ',' ',' ',' '],
                                [' ',' ',' ',' ',' ',' '],
                                ['X',' ',' ',' ',' ',' ']])
  })

  it ("second player should be able to 'drop' token in same column", function() {
    game.playerMove(1)
    game.changePlayer()
    game.playerMove(1)
    expect(game.board).toEqual([[' ',' ',' ',' ',' ',' '],
                                [' ',' ',' ',' ',' ',' '],
                                [' ',' ',' ',' ',' ',' '],
                                [' ',' ',' ',' ',' ',' '],
                                [' ',' ',' ',' ',' ',' '],
                                ['O',' ',' ',' ',' ',' '],
                                ['X',' ',' ',' ',' ',' ']])
  })

  it ("player X wins with a vertical line", function() {
    game.board = [[' ',' ',' ',' ',' ',' '],
                  [' ',' ',' ',' ',' ',' '],
                  [' ',' ',' ',' ',' ',' '],
                  [' ','X',' ',' ',' ',' '],
                  [' ','X',' ',' ',' ',' '],
                  [' ','X',' ',' ',' ',' '],
                  [' ','X',' ',' ',' ',' ']]
    expect(game.winCheck()).toEqual("Player X Wins!")
  })

  it ("player X wins with a horizontal line", function() {
    game.board = [[' ',' ','X','X','X','X'],
                  [' ',' ',' ',' ',' ',' '],
                  [' ',' ',' ',' ',' ',' '],
                  [' ',' ',' ',' ',' ',' '],
                  [' ',' ',' ',' ',' ',' '],
                  [' ',' ',' ',' ',' ',' '],
                  [' ',' ',' ',' ',' ',' ']]
    expect(game.winCheck()).toEqual("Player X Wins!")
  })

  it ("player X wins with a descending diagonal line", function() {
    game.board = [[' ',' ',' ',' ',' ',' '],
                  [' ','X',' ',' ',' ',' '],
                  [' ',' ','X',' ',' ',' '],
                  [' ',' ',' ','X',' ',' '],
                  [' ',' ',' ',' ','X',' '],
                  [' ',' ',' ',' ',' ',' '],
                  [' ',' ',' ',' ',' ',' ']]
    expect(game.winCheck()).toEqual("Player X Wins!")
  })

  it ("player X wins with a ascending diagonal line", function() {
    game.board = [['.','.','.','.','.','.'],
                  ['.','.','.','.','.','.'],
                  ['.','.','.','.','X','.'],
                  ['.','.','.','X','.','.'],
                  ['.','.','X','.','.','.'],
                  ['.','X','.','.','.','.'],
                  ['.','.','.','.','.','.']]
    expect(game.winCheck()).toEqual("Player X Wins!")
  })
})
