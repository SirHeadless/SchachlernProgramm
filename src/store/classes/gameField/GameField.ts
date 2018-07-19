import { ColorType } from './figures/ColorType';
import { Field } from './field/Field';
import { IFigure } from './figures/IFigure';
import { Coordinate } from './Coordinate';
import { Pawn } from './figures/Pawn';

export class GameField {

    constructor(field: Array<Array<Field>>, selectedField: Coordinate) {
        this.field = field;
        this.selectedField = selectedField;
    }

    test = 'test';
    
    field: Array<Array<Field>>;

    selectedField: Coordinate;

    setFigure(figure: IFigure, figurePosition: Coordinate): void {
        this.field[figurePosition.x][figurePosition.y].figure = figure;
    }

    setActive(activeFieldPosition: Coordinate): GameField {
        this.field[activeFieldPosition.x][activeFieldPosition.y].active = true;
        return new GameField(this.field, this.selectedField);
    }

    setDeactive(activeFieldPosition: Coordinate): void {
        this.field[activeFieldPosition.x][activeFieldPosition.y].active = false;
    }

    deactivateAll(): GameField {
        for (let row of this.field) {
            for (let field of row) {
                field.active = false;
            }
        }
        return new GameField(this.field, this.selectedField);
    }

    getField(coord: Coordinate): Field {
        return this.field[coord.x][coord.y];
    }

    public toString = (): string => {
        return 'test2';
    }

}