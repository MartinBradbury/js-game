let game = {
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
    score: 0,
};

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
};


module.exports = { game, newGame };