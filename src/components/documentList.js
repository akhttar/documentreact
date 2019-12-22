import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DocumentListData from './documentListData';
 import {getDocumentForm} from '../redux/action/DocumentAction';
//import * as DocumentAction from '../redux/action/DocumentAction';
class DocumentList extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state = { documentFormData: [] }
    }
    componentDidMount() {

        this.props.getDocumentForm().then(data=>{
            console.log(data);
        })
    }
    render() {

        return (
            <React.Fragment>
                <div className="container">
                    <div className="m-5">
                        <h4 className="m-0">List of Documents</h4>
                        <Link to={`/document/new/id:0`} ><small>Add new document</small><hr/></Link>
                        <DocumentListData documentlistdata={this.props.documentFormData} />
                        {/* <a href="#"><small>Add new document</small></a> */}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
   // alert(ownProps.match.params.id)
    return {
        documentFormData: state.GetDocumentReducer
    };
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         DocumentAction: bindActionCreators(DocumentAction, dispatch)
//     }
// }
export default connect(mapStateToProps, { getDocumentForm })(DocumentList);
//export default connect(mapStateToProps, mapDispatchToProps)(DocumentList);