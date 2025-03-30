import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import initialState from './initialState';
import { thunk }from 'redux-thunk';

// import reducers
import eventsReducer from './eventsRedux';


// combine reducers
const rootReducer = combineReducers({
	events: eventsReducer,  
});

const store = createStore(
  rootReducer,
  initialState,
  compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	)
);

export default store;