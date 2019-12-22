import initialState from     './initialState';
import types from '../action/types';

const getDocumnetReducer = (state = initialState.getDocumentData,action) =>{
    switch (action.type) {
        case types.GET_DOCUMENTFRORM :{
            return  action.payload 
        }
        default:
            return state
    }
}
export default getDocumnetReducer;