import { ColorType } from './figures/ColorType';
import { Field } from './field/Field';
import { IFigure } from './figures/IFigure';
import { Coordinate } from './Coordinate';
import { Pawn } from './figures/Pawn';
import { GameUtilities } from '../../utilities/GameUtilities';
import { Game } from '../Game';

export class GameField {

    constructor(field: Array<Array<Field>>, selectedField: Coordinate) {
        this.field = field;
        this.selectedField = selectedField;
    }

    test = 'test';
    
    field: Array<Array<Field>>;

    selectedField?: Coordinate;

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

    getField(coord: Coordinate): Field | null {
        if (coord == null) {
            return null;
        }
        return this.field[coord.x][coord.y];
    }

    public toString = (): string => {
        return 'test2';
    }

    setSelectedField(coord: Coordinate) {
        return new GameField(this.field, coord);
    }

    getNorthFieldOf(coord: Coordinate): Coordinate | null {
        if (coord != null && coord.x != 0) {
            return new Coordinate( coord.x - 1, coord.y);
        }
        return null;
    }

    getNorthEastFieldOf(coord: Coordinate): Coordinate | null {
        if (coord != null && coord.x != 0 && coord.y < GameUtilities.BOARD_SIZE - 1) {
            return new Coordinate(coord.x - 1, coord.y + 1);
        }
        return null;
    }

    getEastFieldOf(coord: Coordinate): Coordinate | null {
        if (coord != null && coord.y < GameUtilities.BOARD_SIZE - 1) {
            return new Coordinate(coord.x, coord.y + 1);
        }
        return null;
    }

    getSouthEastFieldOf(coord: Coordinate): Coordinate | null {
        if (coord != null && coord.x < GameUtilities.BOARD_SIZE - 1 && coord.y < GameUtilities.BOARD_SIZE - 1) {
            return new Coordinate(coord.x + 1, coord.y + 1);
        }
        return null;
    }

    getSouthFieldOf(coord: Coordinate): Coordinate | null {
        if (coord != null && coord.x < GameUtilities.BOARD_SIZE - 1) {
            return new Coordinate(coord.x + 1, coord.y);
        }
        return null;
    }

    getSouthWestFieldOf(coord: Coordinate): Coordinate | null {
        if (coord != null && coord.x < GameUtilities.BOARD_SIZE - 1 && coord.y != 0) {
            return new Coordinate(coord.x + 1, coord.y - 1);
        }
        return null;
    }

    getWestFieldOf(coord: Coordinate): Coordinate | null {
        if (coord != null && coord.y != 0 ) {
            return new Coordinate(coord.x, coord.y - 1);
        }
        return null;
    }

    getNorthWestFieldOf(coord: Coordinate): Coordinate | null {
        if (coord != null && coord.x != 0 && coord.y != 0) {
            return new Coordinate( coord.x - 1, coord.y - 1);
        }
        return null;
    }

    getNeighbourFieldsOf(coord: Coordinate): Coordinate[] | null {
        var neighbourFields : Coordinate[]= [];
        for (var i = -1; i <= 1; i++) {
            for (var j = -1; j <= 1; j++) {
                if ((i !== 0 || j !== 0) && this.isCoordinatesOnField(coord.x + i, coord.y + j )){
                    console.log("Coordinate: ")
                    console.log(coord.x + i);
                    console.log(coord.y + j);
                    neighbourFields.push(new Coordinate(coord.x + i, coord.y + j));
                }
            }
        }
        return neighbourFields;
    }

    getNorthNeigboursFieldsOf(coord: Coordinate): Coordinate[]{
        return [this.getNorthWestFieldOf(coord), this.getNorthFieldOf(coord), this.getNorthEastFieldOf(coord)];
    }

    getSouthNeigboursFieldsOf(coord: Coordinate): Coordinate[]{
        return [this.getSouthWestFieldOf(coord), this.getSouthFieldOf(coord), this.getSouthEastFieldOf(coord)];
    }

    private isCoordinatesOnField(x: number,y: number) : Boolean{
        return x <= GameUtilities.BOARD_SIZE - 1 && y >= 0 && x >= 0 && y <= GameUtilities.BOARD_SIZE - 1;
    }



}