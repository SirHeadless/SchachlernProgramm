import {Field} from "../classes/gameField/field/Field";
import {Coordinate} from "../classes/gameField/Coordinate";
import {Bishop} from "../classes/gameField/figures/Bishop";
import {Rook} from "../classes/gameField/figures/Rook";
import {OwnActions} from "../../actions/action-types";
import activateField = OwnActions.activateField;
import {GameField} from "../classes/gameField/GameField";

export class FigureMovesUtilities{

    static activateMoveFields(gameField: GameField, coord: Coordinate): GameField{
        var field = gameField.getField(coord);
        if (field.figure == null) {
            return gameField;
        }
        switch (field.figure.constructor) {
            case Rook: {
                return FigureMovesUtilities.activateRookMoveFields(gameField, coord);
            }
            default: {
                return gameField;
            }
        }

    }

    private static activateRookMoveFields(gameField: GameField, coord: Coordinate): GameField {
        var field = gameField.getField(coord);
        if (field.figure.constructor != Rook) {
            return gameField;
        }
        for (var i = 0; i<8;i++) {
            var diagonalField = new Coordinate(i, coord.y);
            var horizontalFIeld = new Coordinate(coord.x, i);
            gameField.setActive(diagonalField);
            gameField.setActive(horizontalFIeld);
        }
        return gameField;
    }
}