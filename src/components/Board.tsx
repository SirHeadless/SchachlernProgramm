import * as React from 'react';
import { connect } from 'react-redux';
import { GameField } from '../store/classes/gameField/GameField';
import FieldComp from "./FieldComp";
import {Coordinate} from "../store/classes/gameField/Coordinate";
import {Action, Dispatch} from "redux";
import {OwnActions} from "../actions/action-types";
import activateField = OwnActions.activateField;

export namespace Board {
    export interface Props {
        gameField: GameField;
        activateField: (c: Coordinate) => void;
    }

    export interface State {
        gameField: GameField;
    }
}


class Board extends React.Component<Board.Props> {

    handleClick() {
        console.log('Clicked test');
        this.props.activateField(new Coordinate(0, 0));
    }

    render() {
        const size = 8;
        var rows: JSX.Element[] = [];
        var cells: JSX.Element[] = [];
        var fields = this.props.gameField.field;
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                let field = fields[i][j];
                cells.push(<FieldComp field={field} coordi={i} coordj={j} size={size} activateField={this.props.activateField}/>);
            }
            var keyRow = 'row' + i;
            rows.push(<tr key={keyRow}>{cells}</tr>);
            cells = [];
        }
        var test =  "1"
        if (this.props.gameField.field[0][0].active) {
            test = "test2";
        }
        return (
            <div>
                <h2 onClick={this.handleClick.bind(this)} >Test {test}</h2>
                <table key="ChessTableBoard" className="TicTacToe">
                    <tbody key="ChessTableBoardBody" className="board">
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Board;