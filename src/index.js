import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//import reducer from './reducers'
import PalyGameStart from './PalyGameStart';





//const store = createStore(game, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//console.log(store.getState());

//store.subscribe(() => {
//    console.log("subscribed", store.getState());
//});

//store.dispatch({ type: 'ADD_WORD', payload: "anna"});
//store.dispatch({ type: 'ADD_WORD', payload: "anna"});


ReactDOM.render(
    <PalyGameStart />, document.getElementById('root')
//<Provider store={store}><PalyGameStart /></Provider>, document.getElementById('root')
);
