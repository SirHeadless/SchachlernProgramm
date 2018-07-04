import { ColorType } from './ColorType';
import { IFigure } from './IFigure';


export class Pawn implements IFigure {
    name = "Pawn"
    color : ColorType;

    constructor(color: ColorType) {
        this.color = color;
    }
}