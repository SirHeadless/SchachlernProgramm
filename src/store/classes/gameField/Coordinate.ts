import { GameUtilities } from '../../utilities/GameUtilities';

export class Coordinate {

    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    equals(coord: Coordinate): Boolean {
        if (this.x === coord.x && this.y === coord.y) {
            return true;
        }
        return false;
    }

    toString = (): string => {
        return `Coordinate (${this.x})(${this.y})`;
    }

}