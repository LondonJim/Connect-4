describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  })

  it ("player should be able to add a token", function() {
    game.playerMove(1)
    expect(game.board).toEqual([['.','.','.','.','.','.'],
                                     ['.','.','.','.','.','.'],
                                     ['.','.','.','.','.','.'],
                                     ['.','.','.','.','.','.'],
                                     ['.','.','.','.','.','.'],
                                     ['.','.','.','.','.','.'],
                                     ['0','.','.','.','.','.']])
  })
})
