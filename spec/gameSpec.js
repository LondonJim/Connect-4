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
                                ['0','.','.','.','.','.']])
  })

  it ("second player should be able to 'drop' two tokens in same column", function() {
    game.playerMove(1)
    game.playerMove(1)
    expect(game.board).toEqual([['.','.','.','.','.','.'],
                                ['.','.','.','.','.','.'],
                                ['.','.','.','.','.','.'],
                                ['.','.','.','.','.','.'],
                                ['.','.','.','.','.','.'],
                                ['1','.','.','.','.','.'],
                                ['0','.','.','.','.','.']])
  })
})
