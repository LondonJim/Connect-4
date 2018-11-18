describe("Full Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  })

  it ("full game where player X wins", function() {
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
    expect(game.winCheck()).toEqual('Player X Wins!')
  })

  it ("full game where player O wins", function() {
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
    expect(game.winCheck()).toEqual('Player O Wins!')
  })
})
