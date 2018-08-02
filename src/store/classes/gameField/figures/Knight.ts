import { ColorType } from './ColorType';
import { IFigure } from './IFigure';

export class Knight implements IFigure {
    name = 'Knight';
    color: ColorType;

    constructor(color: ColorType) {
        this.color = color;
    }
}