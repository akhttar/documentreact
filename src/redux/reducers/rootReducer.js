import SaveDocumentReducer from  './saveDocumentReducer';
import GetDocumentReducer from './getDocuemntReducer';
import {combineReducers} from 'redux';

const appReducer =
    combineReducers({
     SaveDocumentReducer,
     GetDocumentReducer
    })

const rootReducer = (state,action) =>{
    return appReducer (state,action)
}
export default rootReducer;