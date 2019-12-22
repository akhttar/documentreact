import initialState from './initialState';
import types from '../action/types';
const saveDocumentReducer = (state = initialState.documentData, action) => {
//export default (state = initialState.documentData,action) => {    
switch (action.type) {
        case types.SAVE_DOCUMENTFORM :{
            return action.payload
        }
        default:
            return state
    }
}
export default saveDocumentReducer;