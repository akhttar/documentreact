import React from   'react';
import DocumentList from './documentList'
import DocumentForm from './documentForm';
class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <DocumentList/>
            </React.Fragment>
        )
    }
}
export default App;