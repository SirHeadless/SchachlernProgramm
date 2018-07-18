import { GameField } from './gameField/GameField';
import {Coordinate} from "./gameField/Coordinate";
import {Field} from "./gameField/field/Field";

export class Game {

    constructor(field: Array<Array<Field>>) {
        this.gameField = new GameField(field, null);
    }

    gameField: GameField;
    points: number = 0;
    level: number = 1;

    setFieldActive(activeFieldPosition: Coordinate): Game {
        var newGame = new Game(null);
        newGame.gameField = this.gameField.setActive(activeFieldPosition);
        newGame.points = this.points;
        newGame.level = this.level;

        return newGame;
    }




}