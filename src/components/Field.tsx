import * as React from 'react';
import { connect } from 'react-redux';
import { Game } from '../store/classes/Game';

class Field extends React.Component<any, any> {
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
        return <td key={this.keyField.toString()} onClick={this.handleClick.bind(this)} className={'Field ' + this.cssStyle}><p>{this.props.points} </p></td>;
    }

}
// ${this.props.gameField.getField(this.props.coordi,this.props.coordj).figure}

function mapStateToProps(state: Game): any {
    return {
        points: state.points
    };
}

export default connect(mapStateToProps)(Field);
