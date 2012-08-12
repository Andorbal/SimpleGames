describe("TicTacToe Game", function() {
  var game;

  beforeEach(function() {
    game = new TicTacToeGame();
  });

  describe("on a new game", function() {
    it("should start with an empty board", function() {
      for (var i = 0; i < 9; i++) {
        expect(game.board[0]).toBeNull();
      }
    });

    it("should have no players", function() {
      expect(game.players.length).toEqual(0);
    });

    it("should have players if specified", function() {
      game = new TicTacToeGame("Foo", "Bar");
      expect(game.players.length).toEqual(2);
      expect(game.players[0]).toEqual("Foo");
      expect(game.players[1]).toEqual("Bar");
    });
  });

  describe("when adding players", function() {
    beforeEach(function() {
      game.addPlayer("Foo");
    });

    it("should add player to the first spot", function() {
      expect(game.players[0]).toEqual("Foo");
    });

    it("should add second player to second spot", function() {
      game.addPlayer("Bar");
      expect(game.players[1]).toEqual("Bar");
    });

    it("should throw if a third player is added", function() {
      game.addPlayer("Bar");
      expect(function() { game.addPlayer("Baz"); }).toThrow();
    });
  });

  describe("during a game", function() {
    for (var i = 0; i < 9; i++) {
      var spot = i;
      it("should set an X at spot " + spot, function() {
        game.move(spot);
        expect(game.board[spot]).toEqual("X");
      });
    }

    it("should throw if the spot is already set", function() {
      game.move(0);
      expect(function() { game.move(0) }).toThrow();
    });

    it("should throw if the spot is invalid", function() {
      expect(function() { game.move(-1) }).toThrow();
      expect(function() { game.move(9) }).toThrow();
    });

    it("should alternate Xs and Os", function() {
      for (var i = 0; i < 9; i++) {
        game.move(i);
        expect(game.board[i]).toEqual((i % 2) ? "O" : "X");
      }
    });
  });
});