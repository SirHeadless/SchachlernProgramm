import { GameField } from '../store/classes/gameField/GameField';
import * as React from 'react';
import { Dispatch } from 'redux';
import Board from './Board';
import { OwnActions } from '../actions/action-types';
import activateField = OwnActions.handleFieldClick;
import { Coordinate } from '../store/classes/gameField/Coordinate';
import { connect } from 'react-redux';

namespace App {
    export interface Props {
        gameField: GameField;
        dispatch: Dispatch<{}>;
    }

    export interface State {
        gameField: GameField;
    }
}

class App extends React.Component<App.Props> {
    render() {
        const { gameField, dispatch } = this.props;

        return (
            <div>
                <Board
                    gameField={gameField}
                    activateField={(c: Coordinate) => dispatch(activateField(c))}
                />
            </div>
        );
    }
}

function mapStateToProps(state: App.State) {
    return {
        gameField: state.gameField
    };
}

export default connect(mapStateToProps)(App);