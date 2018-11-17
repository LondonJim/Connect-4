describe("Full Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  })

  it ("full game where player 1 wins", function() {
    game.playerMove(1)
    game.changePlayer()
    game.playerMove(2)
    game.changePlayer()
    game.playerMove(1)
    game.changePlayer()
    game.playerMove(3)
    game.changePlayer()
    game.playerMove(1)
    game.changePlayer()
    game.playerMove(4)
    game.changePlayer()
    game.playerMove(1)
    expect(game.winCheck()).toEqual('Player 1 Wins!')
  })

  it ("full game where player 2 wins", function() {
    game.playerMove(1)
    game.changePlayer()
    game.playerMove(2)
    game.changePlayer()
    game.playerMove(1)
    game.changePlayer()
    game.playerMove(2)
    game.changePlayer()
    game.playerMove(3)
    game.changePlayer()
    game.playerMove(2)
    game.changePlayer()
    game.playerMove(1)
    game.changePlayer()
    game.playerMove(2)
    expect(game.winCheck()).toEqual('Player 2 Wins!')
  })
})
