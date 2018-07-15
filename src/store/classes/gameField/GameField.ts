import { ColorType } from './figures/ColorType';
import { Field } from './field/Field';
import { IFigure } from './figures/IFigure';
import { Coordinate } from './Coordinate';
import { Pawn } from './figures/Pawn';

export class GameField {

    test = 'test';
    
    field: Array<Array<Field>> = [
        [new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE)],
        [new Field(ColorType.WHITE), new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK)],
        [new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE)],
        [new Field(ColorType.WHITE), new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK)],
        [new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK, new Pawn(ColorType.BLACK)), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE)],
        [new Field(ColorType.WHITE), new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK)],
        [new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE)],
        [new Field(ColorType.WHITE), new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK)],
    ];

    selectedField: Coordinate;

    setField(figure: IFigure, figurePosition: Coordinate): void {
        this.field[figurePosition.x][figurePosition.y].figure = figure;
    }

    getField(x: number, y: number): Field {
        return this.field[x][y];
    }

    public toString = (): string => {
        return 'test2';
    }

}