let game = {
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
    score: 0,
};

function newGame() {
    game.score = 0;
    game.playerMoves = 0;
    game.currentGame = 0;
};


module.exports = { game, newGame };