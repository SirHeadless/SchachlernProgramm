import { Coordinate } from '../classes/gameField/Coordinate';
import { Game } from '../classes/Game';
import { FigureMovesUtilities } from './FigureMovesUtilities';
import { Simulate } from 'react-dom/test-utils';
import select = Simulate.select;
import { Field } from '../classes/gameField/field/Field';

export class GameUtilities {

    static BOARD_SIZE: number = 8;

    static handleFieldClick(game: Game, newSelectedFieldCoord: Coordinate): Game {
        var selectedField = this.getSelectedField(game);
        var isFigureSelected = selectedField != null  && selectedField.figure != null;
        var newSelectedField = game.gameField.getField(newSelectedFieldCoord);
        if (!isFigureSelected && newSelectedField.figure == null ) {
            return game;
        } else if (!isFigureSelected && newSelectedField.figure != null) {
            return GameUtilities.selectField(game, newSelectedFieldCoord);
        } else if (isFigureSelected &&  newSelectedField.active) {
            return GameUtilities.moveFigure(game, game.gameField.selectedField, newSelectedFieldCoord);
        } else if (isFigureSelected && newSelectedField.figure == null) {
            return GameUtilities.selectField(game, newSelectedFieldCoord);
        } else if (isFigureSelected && newSelectedField.figure != null) {
            return GameUtilities.selectField(game, newSelectedFieldCoord);
        }
        return game;

    }

    static deactivateAllFields(game: Game) {
        var newGameField = game.gameField.deactivateAll();
        var newGame = {...game, gameField: newGameField};
        return newGame;
    }

    static setFieldActive(game: Game, activeFieldPosition: Coordinate): Game {
        var newGameField = game.gameField.setActive(activeFieldPosition);
        var newGame = {...game, gameField: newGameField};
        return newGame;
    }

    static selectField(game: Game, selectedField: Coordinate): Game {
        var deactivatedGameField = game.gameField.deactivateAll();
        var newGameField = FigureMovesUtilities.activateMoveFields(deactivatedGameField, selectedField).setSelectedField(selectedField);
        var newGame = {...game, gameField: newGameField};
        return newGame;
    }

    static moveFigure(game: Game, fromFieldCoord: Coordinate, toFieldCoord: Coordinate): Game {
        if (toFieldCoord.equals(fromFieldCoord)) {
            return {...game};
        }
        var newGameField = FigureMovesUtilities.moveFigure(game.gameField, fromFieldCoord, toFieldCoord).setSelectedField(null).deactivateAll();
        return {...game, gameField: newGameField};
    }

    private static getSelectedField(game: Game): Field {
        return  (game.gameField.selectedField != null) ? game.gameField.getField(game.gameField.selectedField) : null;

    }
}