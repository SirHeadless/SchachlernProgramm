import { ColorType } from './../figures/ColorType';
import { IFigure } from './../figures/IFigure';

export class Field {
    figure?: IFigure;
    color: ColorType;
    active: Boolean;

    constructor(color: ColorType, figure?: IFigure, active?: Boolean) {
        this.color = color;
        this.figure = figure || null;
        this.active = active || false;
    }

}