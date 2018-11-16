describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  })

  it ("player should be able to add a token to a column", function() {
    game.playerMove(1)
    expect(game.board).toEqual([['.','.','.','.','.','.'],
                                ['.','.','.','.','.','.'],
                                ['.','.','.','.','.','.'],
                                ['.','.','.','.','.','.'],
                                ['.','.','.','.','.','.'],
                                ['.','.','.','.','.','.'],
                                ['1','.','.','.','.','.']])
  })

  it ("second player should be able to 'drop' two tokens in same column", function() {
    game.playerMove(1)
    game.playerMove(1)
    expect(game.board).toEqual([['.','.','.','.','.','.'],
                                ['.','.','.','.','.','.'],
                                ['.','.','.','.','.','.'],
                                ['.','.','.','.','.','.'],
                                ['.','.','.','.','.','.'],
                                ['2','.','.','.','.','.'],
                                ['1','.','.','.','.','.']])
  })

  it ("Player 1 wins with a vertical line", function() {
    game.board = [['.','.','.','.','.','.'],
                  ['.','.','.','.','.','.'],
                  ['.','.','.','.','.','.'],
                  ['.','1','.','.','.','.'],
                  ['.','1','.','.','.','.'],
                  ['.','1','.','.','.','.'],
                  ['.','1','.','.','.','.']]
    expect(game.winCheck()).toEqual("Player 1 Wins!")
  })

  it ("Player 1 wins with a horizontal line", function() {
    game.board = [['.','.','1','1','1','1'],
                  ['.','.','.','.','.','.'],
                  ['.','.','.','.','.','.'],
                  ['.','.','.','.','.','.'],
                  ['.','.','.','.','.','.'],
                  ['.','.','.','.','.','.'],
                  ['.','.','.','.','.','.']]
    expect(game.winCheck()).toEqual("Player 1 Wins!")
  })

  it ("Player 1 wins with a descending diagonal line", function() {
    game.board = [['.','.','.','.','.','.'],
                  ['.','1','.','.','.','.'],
                  ['.','.','1','.','.','.'],
                  ['.','.','.','1','.','.'],
                  ['.','.','.','.','1','.'],
                  ['.','.','.','.','.','.'],
                  ['.','.','.','.','.','.']]
    expect(game.winCheck()).toEqual("Player 1 Wins!")
  })

  it ("Player 1 wins with a ascending diagonal line", function() {
    game.board = [['.','.','.','.','.','.'],
                  ['.','.','.','.','.','.'],
                  ['.','.','.','.','1','.'],
                  ['.','.','.','1','.','.'],
                  ['.','.','1','.','.','.'],
                  ['.','1','.','.','.','.'],
                  ['.','.','.','.','.','.']]
    expect(game.winCheck()).toEqual("Player 1 Wins!")
  })
})
