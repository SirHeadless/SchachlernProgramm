import { Field } from '../classes/gameField/field/Field';
import { Coordinate } from '../classes/gameField/Coordinate';
import { Bishop } from '../classes/gameField/figures/Bishop';
import { Rook } from '../classes/gameField/figures/Rook';
import { OwnActions } from '../../actions/action-types';
import activateField = OwnActions.handleFieldClick;
import { GameField } from '../classes/gameField/GameField';
import { Game } from '../classes/Game';
import { GameUtilities } from './GameUtilities';
import { Knight } from '../classes/gameField/figures/Knight';
import { ColorType } from '../classes/gameField/figures/ColorType';
import { Queen } from '../classes/gameField/figures/Queen';
import { King } from '../classes/gameField/figures/King';
import { Pawn } from '../classes/gameField/figures/Pawn';

export class FigureMovesUtilities {

    static moveFigure(gameField: GameField, fromFieldCoord: Coordinate, toFieldCoord: Coordinate): GameField {
        gameField.getField(toFieldCoord).figure = gameField.getField(fromFieldCoord).figure;
        gameField.getField(fromFieldCoord).figure = null;
        return gameField;
    }

    static activateMoveFields(gameField: GameField, coord: Coordinate): GameField {
        var field = gameField.getField(coord);
        if (field.figure == null) {
            return gameField;
        }
        switch (field.figure.constructor) {
            case Rook: {
                return FigureMovesUtilities.activateRookMoveFields(gameField, coord, field.figure.color);
            }
            case Bishop: {
                return FigureMovesUtilities.activateBishopMoveFields(gameField, coord, field.figure.color);
            }
            case Knight: {
                return FigureMovesUtilities.activateKnightMoveFields(gameField, coord, field.figure.color);
            }
            case Queen: {
                var rookMoveGameField = FigureMovesUtilities.activateRookMoveFields(gameField, coord, field.figure.color);
                return FigureMovesUtilities.activateBishopMoveFields(rookMoveGameField, coord, field.figure.color);
            }
            case King: {
                return FigureMovesUtilities.activateKingMoveFields(gameField, coord, field.figure.color);
            }
            case Pawn: {
                return FigureMovesUtilities.activatePawnMoveFields(gameField, coord, field.figure.color);
            }
            default: {
                return gameField;
            }
        }

    }

    private static activatePawnMoveFields(gameField: GameField, coord: Coordinate, figureColor: ColorType): GameField {
        var takePawnMoves: Coordinate[] = (ColorType.WHITE === figureColor) ?
            [gameField.getNorthWestFieldOf(coord), gameField.getNorthEastFieldOf(coord)] :
            [gameField.getSouthWestFieldOf(coord), gameField.getSouthEastFieldOf(coord)];

        console.log(takePawnMoves);
        for (let takePawnMove of takePawnMoves.filter(value => value !== null)) {
            var fieldToCheck = gameField.getField(takePawnMove);
            var isFieldTakeable = fieldToCheck.figure === null ? false : figureColor !== fieldToCheck.figure.color;
            if (isFieldTakeable) {
                gameField.setActive(takePawnMove);
            }
        }

        var pawnMove: Coordinate = (ColorType.WHITE === figureColor) ?
            gameField.getNorthFieldOf(coord): gameField.getSouthFieldOf(coord);

        if (pawnMove !== null && gameField.getField(pawnMove).figure === null ) {
            gameField.setActive(pawnMove);
        }

        return gameField;
    }

    private static activateKingMoveFields(gameField: GameField, coord: Coordinate, figureColor: ColorType): GameField {
        for (let coordToMove of gameField.getNeighbourFieldsOf(coord)) {
            var fieldToMove = gameField.getField(coordToMove);
            var isFieldWalkable = fieldToMove.figure != null ? fieldToMove.figure.color != figureColor : true;
            if (isFieldWalkable) {
                gameField.setActive(coordToMove);
            }
        }

        return gameField;
    }

    private static activateKnightMoveFields(gameField: GameField, coord: Coordinate, knightColor: ColorType): GameField {

        var knightMoves: Coordinate[] = [];

        knightMoves.push(gameField.getNorthEastFieldOf(gameField.getNorthFieldOf(coord)));
        knightMoves.push(gameField.getNorthWestFieldOf(gameField.getNorthFieldOf(coord)));
        knightMoves.push(gameField.getNorthEastFieldOf(gameField.getEastFieldOf(coord)));
        knightMoves.push(gameField.getSouthEastFieldOf(gameField.getEastFieldOf(coord)));
        knightMoves.push(gameField.getSouthEastFieldOf(gameField.getSouthFieldOf(coord)));
        knightMoves.push(gameField.getSouthWestFieldOf(gameField.getSouthFieldOf(coord)));
        knightMoves.push(gameField.getSouthWestFieldOf(gameField.getWestFieldOf(coord)));
        knightMoves.push(gameField.getNorthWestFieldOf(gameField.getWestFieldOf(coord)));

        for (let move of knightMoves) {
            if (move != null) {
                var fieldToMove = gameField.getField(move);
                var isFieldWalkable = fieldToMove.figure != null ? fieldToMove.figure.color != knightColor : true;
                if (move != null && isFieldWalkable) {
                    gameField.setActive(move);
                }
            }
        }

        return gameField;
    }

    private static activateRookMoveFields(gameField: GameField, coord: Coordinate, rookColor: ColorType): GameField {
        // var field = gameField.getField(coord);
        // if (field.figure.constructor != Rook) {
        //     return gameField;
        // }

        var nextCoord: Coordinate = coord;
        while (nextCoord != null) {
            nextCoord = gameField.getNorthFieldOf(nextCoord);
            if (nextCoord != null ) {
                if (gameField.getField(nextCoord).figure !== null) {
                    if ( gameField.getField(nextCoord).figure.color != rookColor) {
                        gameField.setActive(nextCoord);
                        break;
                    } else {
                        break;
                    }
                } else {
                    gameField.setActive(nextCoord);
                }
            }
        }

        var nextCoord: Coordinate = coord;
        while (nextCoord != null) {
            nextCoord = gameField.getEastFieldOf(nextCoord);
            if (nextCoord != null ) {
                if (gameField.getField(nextCoord).figure !== null) {
                    if ( gameField.getField(nextCoord).figure.color != rookColor) {
                        gameField.setActive(nextCoord);
                        break;
                    } else {
                        break;
                    }
                } else {
                    gameField.setActive(nextCoord);
                }
            }
        }

        var nextCoord: Coordinate = coord;
        while (nextCoord != null) {
            nextCoord = gameField.getSouthFieldOf(nextCoord);
            if (nextCoord != null ) {
                if (gameField.getField(nextCoord).figure !== null) {
                    if ( gameField.getField(nextCoord).figure.color != rookColor) {
                        gameField.setActive(nextCoord);
                        break;
                    } else {
                        break;
                    }
                } else {
                    gameField.setActive(nextCoord);
                }
            }
        }

        var nextCoord: Coordinate = coord;
        while (nextCoord != null) {
            nextCoord = gameField.getWestFieldOf(nextCoord);
            if (nextCoord != null ) {
                if (gameField.getField(nextCoord).figure !== null) {
                    if ( gameField.getField(nextCoord).figure.color != rookColor) {
                        gameField.setActive(nextCoord);
                        break;
                    } else {
                        break;
                    }
                } else {
                    gameField.setActive(nextCoord);
                }
            }
        }

        return gameField;
    }

    private static activateBishopMoveFields(gameField: GameField, coord: Coordinate, bishopColor: ColorType): GameField {
        // var field = gameField.getField(coord);
        // if (field.figure.constructor != Bishop) {
        //     return gameField;
        // }

        var nextCoord: Coordinate = coord;
        while (nextCoord != null) {
            nextCoord = gameField.getSouthWestFieldOf(nextCoord);
            if (nextCoord != null ) {
                if (gameField.getField(nextCoord).figure !== null) {
                    if ( gameField.getField(nextCoord).figure.color != bishopColor) {
                        gameField.setActive(nextCoord);
                        break;
                    } else {
                        break;
                    }
                } else {
                    gameField.setActive(nextCoord);
                }
            }
        }
        var nextCoord: Coordinate = coord;
        while (nextCoord != null) {
            nextCoord = gameField.getNorthEastFieldOf(nextCoord);
            if (nextCoord != null ) {
                if (gameField.getField(nextCoord).figure !== null) {
                    if ( gameField.getField(nextCoord).figure.color != bishopColor) {
                        gameField.setActive(nextCoord);
                        break;
                    } else {
                        break;
                    }
                } else {
                    gameField.setActive(nextCoord);
                }
            }

        }
        var nextCoord: Coordinate = coord;
        while (nextCoord != null) {
            nextCoord = gameField.getNorthWestFieldOf(nextCoord);
            if (nextCoord != null ) {
                if (gameField.getField(nextCoord).figure !== null) {
                    if ( gameField.getField(nextCoord).figure.color != bishopColor) {
                        gameField.setActive(nextCoord);
                        break;
                    } else {
                        break;
                    }
                } else {
                    gameField.setActive(nextCoord);
                }
            }
        }
        var nextCoord: Coordinate = coord;
        while (nextCoord != null) {
            nextCoord = gameField.getSouthEastFieldOf(nextCoord);
            if (nextCoord != null ) {
                if (gameField.getField(nextCoord).figure !== null) {
                    if ( gameField.getField(nextCoord).figure.color != bishopColor) {
                        gameField.setActive(nextCoord);
                        break;
                    } else {
                        break;
                    }
                } else {
                    gameField.setActive(nextCoord);
                }
            }

        }

        return gameField;
    }
}