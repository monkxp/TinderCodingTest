import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom'
import reducer from './redux/reducers';
import './index.css';
import App from './App';
import MyFavorite from './MyFavorite'
import * as serviceWorker from './serviceWorker';


const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
    	<BrowserRouter>
    		<main>
				<Route exact path="/" component={App}/>
				<Route path="/myfavorite" component ={MyFavorite}/>
			</main>
    	</BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
