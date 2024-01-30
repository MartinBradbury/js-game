/**
 * @jest-environment jsdom
 */


const { game, newGame } = require("../game");




beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("player moves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("player choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("buttons contain the correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = 10;
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should set player moves to zero", () => {
        expect(game.playerMoves).toEqual(0);
    });
})