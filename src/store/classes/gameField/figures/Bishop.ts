import { ColorType } from './ColorType';
import { IFigure } from './IFigure';

export class Bishop implements IFigure {
    name = 'Bishop';
    color: ColorType;

    constructor(color: ColorType) {
        this.color = color;
    }
}