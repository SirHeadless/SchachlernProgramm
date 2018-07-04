import * as React from "react"
import Field from "./Field"
import Points from "./Points"
// import {Game} from "../store/classes/Game"
import {connect} from "react-redux"

class Board extends React.Component<any, any> {

    render() {
        const size = 8;
        var rows : any[]= [];
        var cells : any[] = [];
        var fields = this.props.gameField.field;
        var figure;
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                let field = fields[i][j];
                let figure = field.figure !== null ? field.figure.name : "";
                cells.push(<td className={"Field " + field.color + "Field"}><p><img src="PawnWhite.png" alt=""/> </p></td>);
                 {/* cells.push(<Field gameField={this.props.game.gameField} coordi={i} coordj={j} size={size}/>); */}
            }
            var keyRow = "row" + i;
            rows.push(<tr key={keyRow}>{cells}</tr>);
            cells = [];
        }
        return (
            <div>
                {/* <h2>{this.props.game.points}</h2> */}
                <h2></h2>
                <table key="ChessTableBoard" className="TicTacToe">
                    <tbody key="ChessTableBoardBody" className="board">
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
};


function mapStateToProps(state : any) {
    return {
        gameField: state.gameField
    }
}

export default connect(mapStateToProps)(Board);

// export default Board;