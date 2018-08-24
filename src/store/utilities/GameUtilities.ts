import { Coordinate } from '../classes/gameField/Coordinate';
import { Game } from '../classes/Game';
import { FigureMovesUtilities } from './FigureMovesUtilities';

interface BoardMarkerState {
    markedField: Coordinate;
    enterState: (game: Game, selectedFieldCoord: Coordinate) => void;
    emptyFieldSelected: (game: Game, selectedFieldCoord: Coordinate) => Game;
    figureSelected: (game: Game, selectedFieldCoord: Coordinate) => Game;
}

export class GameUtilities {

    static BOARD_SIZE: number = 8;

    static boardMarkerState: BoardMarkerState;

    static NothingMarked = class {

        constructor(markedField: Coordinate) {
            this.markedField = markedField;
        }

        markedField: Coordinate;

        enterState(game: Game, selectedFieldCoord: Coordinate) {

        }

        emptyFieldSelected(game: Game, selectedFieldCoord: Coordinate): Game {
            return game;
        }

        figureSelected(game: Game, selectedFieldCoord: Coordinate): Game  {
            GameUtilities.boardMarkerState = new GameUtilities.FigureMarked(selectedFieldCoord);
            return GameUtilities.markField(game, selectedFieldCoord);
        }


    }

    static FigureMarked = class {

        constructor(markedField: Coordinate) {
            this.markedField = markedField;
        }

        markedField: Coordinate;

        enterState(game: Game, selectedFieldCoord: Coordinate) {

        }

        emptyFieldSelected(game: Game, selectedFieldCoord: Coordinate): Game  {
            var selectedField = game.gameField.getField(selectedFieldCoord);
            GameUtilities.boardMarkerState = new GameUtilities.NothingMarked(selectedFieldCoord);
            if (selectedField.active) {
                return GameUtilities.moveFigure(game, this.markedField, selectedFieldCoord);
            }
            return GameUtilities.markField(game, selectedFieldCoord);

        }

        figureSelected(game: Game, selectedFieldCoord: Coordinate) : Game {
            var selectedField = game.gameField.getField(selectedFieldCoord);
            if (selectedField.active) {
                GameUtilities.boardMarkerState = new GameUtilities.NothingMarked(null);
                return GameUtilities.moveFigure(game, this.markedField, selectedFieldCoord);
            }
            GameUtilities.boardMarkerState = new GameUtilities.FigureMarked(selectedFieldCoord);
            return GameUtilities.markField(game, selectedFieldCoord);

        }

    }


    static handleFieldClick(game: Game, newSelectedFieldCoord: Coordinate): Game {

        if (this.boardMarkerState == undefined) {
            this.boardMarkerState = new GameUtilities.NothingMarked(null);
        }

        var selectedField = game.gameField.getField(newSelectedFieldCoord);
        var isFigureSelected;
        if (selectedField == null) {
            isFigureSelected = false;
        } else {
            isFigureSelected = selectedField.figure != null;
        }


        if (!isFigureSelected) {
            return this.boardMarkerState.emptyFieldSelected(game, newSelectedFieldCoord);
        }
        return this.boardMarkerState.figureSelected(game, newSelectedFieldCoord);

    }

    private static deactivateAllFields(game: Game) {
        var newGameField = game.gameField.deactivateAll();
        var newGame = {...game, gameField: newGameField};
        return newGame;
    }

    private static setFieldActive(game: Game, activeFieldPosition: Coordinate): Game {
        var newGameField = game.gameField.setActive(activeFieldPosition);
        var newGame = {...game, gameField: newGameField};
        return newGame;
    }

    private static markField(game: Game, selectedField: Coordinate): Game {
        var deactivatedGameField = game.gameField.deactivateAll();
        var newGameField = FigureMovesUtilities.activateMoveFields(deactivatedGameField, selectedField).setSelectedField(selectedField);
        var newGame = {...game, gameField: newGameField};
        return newGame;
    }

    private static moveFigure(game: Game, fromFieldCoord: Coordinate, toFieldCoord: Coordinate): Game {
        if (toFieldCoord.equals(fromFieldCoord)) {
            return {...game};
        }
        var newGameField = FigureMovesUtilities.moveFigure(game.gameField, fromFieldCoord, toFieldCoord).setSelectedField(null).deactivateAll();
        return {...game, gameField: newGameField};
    }

}