import { ColorType } from './ColorType';
import { IFigure } from './IFigure';

export class King implements IFigure {
    name = 'King';
    color: ColorType;

    constructor(color: ColorType) {
        this.color = color;
    }

}