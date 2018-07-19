import { ColorType } from './ColorType';
import { IFigure } from './IFigure';

export class Rook implements IFigure {
    name = 'Rook';
    color: ColorType;

    constructor(color: ColorType) {
        this.color = color;
    }
}