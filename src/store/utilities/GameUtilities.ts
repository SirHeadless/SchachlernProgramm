import {Coordinate} from "../classes/gameField/Coordinate";
import {Game} from "../classes/Game";
import {FigureMovesUtilities} from "./FigureMovesUtilities";

export class GameUtilities {

    static setFieldActive(game: Game, activeFieldPosition: Coordinate) : Game {
        var newGameField = game.gameField.setActive(activeFieldPosition)
        var newGame = {...game, gameField: newGameField}
        return newGame;
    }

    static selectField(game: Game, selectedField: Coordinate) : Game {
        var deactivatedGameField = game.gameField.deactivateAll();
        var newGameField = FigureMovesUtilities.activateMoveFields(deactivatedGameField, selectedField);
        var newGame = {...game, gameField: newGameField};
        return newGame;
    }
}