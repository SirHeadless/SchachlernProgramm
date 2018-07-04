import { ColorType } from './ColorType';
import { IFigure } from './IFigure';

export class Queen implements IFigure{
    name = "Queen"
    color : ColorType;

    constructor(color: ColorType) {
        this.color = color;
    }
    
}