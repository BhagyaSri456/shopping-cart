import { createStore} from 'redux';
import cartReducer from '../reducers/cartReducer';
// import thunk from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        cartReducer,
        // composeEnhancers(applyMiddleware(thunk))
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};
