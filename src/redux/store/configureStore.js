import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise'

const createStoreWithMiddlerWare =applyMiddleware(ReduxPromise,reduxThunk)(createStore);

const configureStore = () => {return createStoreWithMiddlerWare(rootReducer); } 

// const configureStore = (initialState) =>{
//    return createStore(rootReducer,initialState,applyMiddleware(reduxThunk,ReduxPromise))
// }
export default configureStore;