import types from './types'
import apiBase from './apis';


export const saveDocumentForm = (documentdata) => 
{
    return (dispatch) =>apiBase.post('/documents',documentdata).then(data=>{
        dispatch({ type: types.GET_DOCUMENTFRORM , payload:data.status});
    })

}
    // async (dispatch) => {
    //     const res = await apiBase.post('/documents', documentdata)
    //     dispatch({ type: types.SAVE_DOCUMENTFORM, payload: res.status })
    // }
export const getDocumentForm =()=>{
    
 return (dispatch) =>   apiBase.get('/documents').then(data=>{
        dispatch({ type: types.GET_DOCUMENTFRORM , payload:data.data});
    })

// async (dispatch) =>{
//         const res =await apiBase.get('/documents');   
          
//         dispatch({ type: types.GET_DOCUMENTFRORM , payload:res.data});
//     }
}