import { GameField } from './gameField/GameField';


export class Game {

    gameField : GameField = new GameField();
    points : number = 0;
    level: number = 1;

}