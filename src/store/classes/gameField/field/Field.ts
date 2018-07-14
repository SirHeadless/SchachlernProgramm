import { ColorType } from './../figures/ColorType';
import { IFigure } from './../figures/IFigure';

export class Field {
    figure?: IFigure;
    color: ColorType;
    active: Boolean;

    constructor(color: ColorType, figure?: IFigure) {
        this.color = color;
        this.figure = figure;
    }
}