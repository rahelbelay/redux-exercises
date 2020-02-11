

import {
    createStore
} from 'redux';
const defaultState = {
    movies: [10],
    favSongs: ['xxx', 'blah', 'yyy'],
    noOfBurritos: [5],
    noOfCoffee: [7],
    sandwich: ['club sandwich', 'pocket sandwich', 'Beirute ']


};

const NOOFMOVIES = 'NOOFMOVIES';
const CHANGESONG = 'CHANGESONG';
const NOOFBURRITOS = 'NOOFBURRITOS';
const NOOFCOFFEE = 'NOOFCOFFEE';
const SANDWICH = 'SANDWICH'

function counter(state = defaultState, action) {
    const newState = { ...state };

    switch (action.type) {
        case NOOFMOVIES:
            newState.movies[action.id] = state.movies[action.id] + action.howMuch
            break;
        case CHANGESONG:
            newState.favSongs[action.id] = action.songName

        case NOOFBURRITOS:
            newState.noOfBurritos[action.id] = state.noOfBurritos[action.id] + action.howMany
            break;
        case NOOFCOFFEE:
            newState.noOfCoffee[action.id] = state.noOfCoffee[action.id] + action.howMuch
            break;
        case SANDWICH:
            newState.sandwich.push(action.kind);

    }
    return newState
}

const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(() => {
    console.table(store.getState());
});

function actionNoOfMovies(id, howMuch) {
    return {
        type: NOOFMOVIES,
        id,
        howMuch
    }
}
function actionChangeSong(id, songName) {
    return {
        type: CHANGESONG,
        id,
        songName
    }
}
function actionNoOfBurritos(id, howMany) {
    return {
        type: NOOFBURRITOS,
        id,
        howMany
    }
}

function actionNoOfCoffee(id, howMuch) {
    return {
        type: NOOFCOFFEE,
        id,
        howMuch
    }
}
function actionSancwichForLunch(kind) {
    return {
        type: SANDWICH,
        kind

    }
}




store.dispatch(actionNoOfMovies(0, 1000))
store.dispatch(actionChangeSong(1, 'kkk'))
store.dispatch(actionNoOfBurritos(0, 20))
store.dispatch(actionNoOfCoffee(0, 20))
store.dispatch(actionSancwichForLunch('bbb'))




//console.log('works')
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
