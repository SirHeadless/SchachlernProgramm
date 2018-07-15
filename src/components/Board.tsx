import * as React from 'react';
import { connect } from 'react-redux';
import { GameField } from '../store/classes/gameField/GameField';
import FieldComp from "./FieldComp";

export namespace Board {
    export interface Props {
        gameField: GameField;
    }

    export interface State {
        gameField: GameField;
    }
}

class Board extends React.Component<Board.Props> {

    render() {
        const size = 8;
        var rows: JSX.Element[] = [];
        var cells: JSX.Element[] = [];
        var fields = this.props.gameField.field;
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                let field = fields[i][j];
                cells.push(<FieldComp field={field} coordi={i} coordj={j} size={size}/>);
            }
            var keyRow = 'row' + i;
            rows.push(<tr key={keyRow}>{cells}</tr>);
            cells = [];
        }
        return (
            <div>
                <h2>Test</h2>
                <table key="ChessTableBoard" className="TicTacToe">
                    <tbody key="ChessTableBoardBody" className="board">
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state: Board.State) {
    return {
        gameField: state.gameField
    };
}

export default connect(mapStateToProps)(Board);