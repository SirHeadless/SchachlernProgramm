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
import {Action, handleActions} from 'redux-actions';
import {Coordinate} from "./store/classes/gameField/Coordinate";
import {OwnActions} from "./actions/action-types";
import ActionTypes = OwnActions.ActionTypes;
import App from "./components/App";
import logger, {createLogger} from "redux-logger";
import {Field} from "./store/classes/gameField/field/Field";
import {ColorType} from "./store/classes/gameField/figures/ColorType";
import {Pawn} from "./store/classes/gameField/figures/Pawn";


let field: Array<Array<Field>> = [
    [new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE)],
    [new Field(ColorType.WHITE), new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK)],
    [new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE)],
    [new Field(ColorType.WHITE), new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK, null, true), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK)],
    [new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK, new Pawn(ColorType.BLACK)), new Field(ColorType.WHITE, null, true), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE)],
    [new Field(ColorType.WHITE), new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK)],
    [new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE)],
    [new Field(ColorType.WHITE), new Field(ColorType.BLACK) , new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK), new Field(ColorType.WHITE), new Field(ColorType.BLACK)],
];


let initialState: Game = new Game(field);

const reducer = handleActions<Game, Coordinate>({
    [ActionTypes.ACTIVATE_FILED]: (state : Game, action: Action<Coordinate>) : Game => {
        console.log("set field active" + action.payload);
        return state.setFieldActive(action.payload);
    }
},initialState);


let store: Store<Game> = createStore<Game>(reducer, initialState, applyMiddleware(createLogger()));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('example')
);