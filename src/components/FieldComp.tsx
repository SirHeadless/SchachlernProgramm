import * as React from 'react';
import { connect } from 'react-redux';
import { Game } from '../store/classes/Game';
import {Field} from "../store/classes/gameField/field/Field";

export namespace FieldComp {
    export interface Props {
        field: Field;
        coordi: number;
        coordj: number;
        size: number;
        points: number;
    }
}

class FieldComp extends React.Component<FieldComp.Props> {
    keyNr: number = (this.props.coordi * this.props.size + this.props.coordj);
    keyField = 'field' + this.keyNr;
    cssStyle: string;

    handleClick() {
        console.log(`Clicked on coordinate (${this.keyNr})`);
    }
    render() {
        if ((this.props.coordi + this.props.coordj) % 2 === 0) {
            this.cssStyle = 'field grey';
        } else {
            this.cssStyle = 'field';
        }
        if (this.props.field.figure != null) {
            var image = require("../resources/PawnBlack.png");
        } else {
            var image = null;
        }
        return <td key={this.keyField.toString()} onClick={this.handleClick.bind(this)} className={' ' + this.props.field.color + 'Field'}><img className="imageTest" src={image} alt=""/></td>;

    }

}
// ${this.props.gameField.getField(this.props.coordi,this.props.coordj).figure}

function mapStateToProps(state: Game) {
    return {
        points: state.points
    };
}

export default connect(mapStateToProps)(FieldComp);
