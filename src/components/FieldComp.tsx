import * as React from 'react';
import {Field} from "../store/classes/gameField/field/Field";
import {Coordinate} from "../store/classes/gameField/Coordinate";

export namespace FieldComp {
    export interface Props {
        field: Field;
        coordi: number;
        coordj: number;
        size: number;
        activateField: (c: Coordinate) => void;
    }
}

class FieldComp extends React.Component<FieldComp.Props> {
    keyNr: number = (this.props.coordi * this.props.size + this.props.coordj);
    keyField = 'field' + this.keyNr;

    handleClick() {
        console.log(`Clicked on coordinate (${this.props.coordi}, ${this.props.coordj})`);
        this.props.activateField(new Coordinate(this.props.coordi, this.props.coordj));
    }
    render() {
        if (this.props.field.figure != null) {
            var image = require("../resources/PawnBlack.png");
        } else {
            var image = null;
        }
        var test = "";
        if (this.props.field.active) {
            test = "green";
        }
        return <td key={this.keyField.toString()} onClick={this.handleClick.bind(this)} className={' ' + test + this.props.field.color + 'Field'}><img className="imageTest" src={image} alt=""/></td>;

    }
}

export default FieldComp;