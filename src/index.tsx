import {
    Action,
    Reducer,
    Store,
    createStore
} from 'redux';

import './style.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Game } from './store/classes/Game';
import { Provider } from 'react-redux';
import Board from './components/Board';

let initialState: Game = new Game();

let reducer: Reducer<Game> = (state: Game = initialState, action: Action) => {
    console.log('Reducer was executed');
    return state;
};

let store: Store<Game> = createStore<Game>(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Board/>
    </Provider>,
    document.getElementById('example')
);