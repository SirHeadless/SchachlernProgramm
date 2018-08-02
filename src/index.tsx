import {
    Reducer,
    Store,
    createStore, applyMiddleware
} from 'redux';

import './style.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Game } from './store/classes/Game';
import { Provider } from 'react-redux';
import { Coordinate } from './store/classes/gameField/Coordinate';
import { OwnActions } from './actions/action-types';
import ActionTypes = OwnActions.ActionTypes;
import App from './components/App';
import { createLogger } from 'redux-logger';
import { Field } from './store/classes/gameField/field/Field';
import { ColorType } from './store/classes/gameField/figures/ColorType';
import { GameUtilities } from './store/utilities/GameUtilities';
import { Action, handleActions } from 'redux-actions';
import { Rook } from './store/classes/gameField/figures/Rook';
import { Bishop } from './store/classes/gameField/figures/Bishop';
import { Knight } from './store/classes/gameField/figures/Knight';
import { Queen } from './store/classes/gameField/figures/Queen';
import {King} from "./store/classes/gameField/figures/King";
import {Pawn} from "./store/classes/gameField/figures/Pawn";

let field: Array<Array<Field>> = [
    [new Field(ColorType.BLACK) , new Field(ColorType.WHITE, new Knight(ColorType.WHITE)), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE)],
    [new Field(ColorType.WHITE), new Field(ColorType.BLACK, new Knight(ColorType.WHITE)) , new Field(ColorType.WHITE, new Rook(ColorType.WHITE)), new Field(ColorType.BLACK, new Pawn(ColorType.BLACK)), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK)],
    [new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK, new Rook(ColorType.WHITE)), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE)],
    [new Field(ColorType.WHITE), new Field(ColorType.BLACK) , new Field(ColorType.WHITE, new Bishop(ColorType.BLACK)), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK)],
    [new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK, new Bishop(ColorType.BLACK)), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE)],
    [new Field(ColorType.WHITE), new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK, new Rook(ColorType.BLACK)), new Field(ColorType.WHITE, new Queen(ColorType.WHITE)), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK)],
    [new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK, new Pawn(ColorType.WHITE)), new Field(ColorType.WHITE, new King(ColorType.BLACK)), new Field(ColorType.BLACK), new Field(ColorType.WHITE)],
    [new Field(ColorType.WHITE), new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK)],
];

let initialState: Game = new Game(field);

const reducer = handleActions<Game, Coordinate>({
    [ActionTypes.HANDLE_FIELD_CLICK]: (state: Game, action: Action<Coordinate>): Game => {
        console.log('set field active' + action.payload);
        return GameUtilities.handleFieldClick(state, action.payload);
    }
},                                              initialState);

let store: Store<Game> = createStore<Game>(reducer, initialState, applyMiddleware(createLogger()));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('example')
);