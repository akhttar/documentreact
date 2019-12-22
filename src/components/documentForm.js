import React from 'react';
import { connect } from 'react-redux';
import { saveDocumentForm } from '../redux/action/DocumentAction';
import ResponseDisplay from './responseDisplay';
import ProcessBar from './processBar';
import {Link} from 'react-router-dom';

class DocumentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            docuemntFormDetail: { "Title": "", "Description": "", "Publisher": "" },
            isHide: 'd-none',
            displayMessage: '<ul>',
            showProcessBar: 'd-none',
            // error: null,
            displayColor: ''
        };
    }


    validate =() => {
        let err = false;
        let msg ='';
        if (this.state.docuemntFormDetail.Title === '') {
            msg = "<li> Title can not empty </li>";
            err = true
        }
        if (this.state.docuemntFormDetail.Description === '') {
            msg = msg + " <li> Description can not empty </li>";
            err = true
        }

        if (this.state.docuemntFormDetail.Publisher === '') {
            msg= msg+ "<li> Publisher can not empty </li>";
            err = true
        }
        if(msg !== '')
            this.setState({displayMessage : msg})

        this.state.displayMessage = this.state.displayMessage + "</ul>"
        return err;
        

    }
    onSubmit = () => {
       

        if (! this.validate()) {
            this.setState({ showProcessBar: "d-block", displayColor: "text-success" });
            setTimeout(() => {
                this.props.saveDocumentForm(this.state.docuemntFormDetail).then(data => {
                    if (this.props.saveDocumentResponse === 201) {
                        this.setState({ isHide: 'text-success d-block' })
                        this.setState({ displayMessage: "Saved Successfully" });
                    }
                    else {
                        this.setState({ isHide: 'text-warning d-block' })
                        this.setState({ displayMessage: "Saved Falied" });
                    }
                    this.setState({ showProcessBar: "d-none" });
                })

            }, 2000);
        }
        else {
           
            this.setState({ isHide: 'd-block', displayColor: "text-danger" })
            
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <ProcessBar showProcessBar={this.state.showProcessBar} />

                    <h2 className="text-center">Add Document Form</h2>
                    <ResponseDisplay displayColor={this.state.displayColor} isHide={this.state.isHide} displayMessage={this.state.displayMessage} />
                    <form className="formgroup w-50">
                        <label>Title</label>
                        <input type="textbox" onChange={(e) => {
                            this.setState({
                                'docuemntFormDetail': Object.assign({}, this.state.docuemntFormDetail, {
                                    Title: e.target.value
                                })
                            })
                        }} className="form-control form-control-sm" />
                    </form>
                    <form className="formgroup w-50  mt-3">
                        <label>Description</label>
                        <input type="textbox"
                            onChange={(e) => {
                                this.setState(({
                                    'docuemntFormDetail': Object.assign({}, this.state.docuemntFormDetail, {
                                        Description: e.target.value
                                    })
                                }))
                            }}
                            className="form-control form-control-sm" />
                    </form>
                    <form className="formgroup w-50 mt-3">
                        <label>Publish:</label>
                        <input type="textbox"
                            onChange={(e) => this.setState({
                                'docuemntFormDetail': Object.assign({}, this.state.docuemntFormDetail, {
                                    Publisher: e.target.value
                                })
                            })}
                            className="form-control form-control-sm" />
                    </form>
                    <button className="btn btn-primary mt-4" onClick={this.onSubmit.bind(this)}>Submit</button>
                    <Link className="btn btn-primary mt-4 ml-3" to={'/'} >Back</Link>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        saveDocumentResponse: state.SaveDocumentReducer
    }
}
export default connect(mapStateToProp, { saveDocumentForm })(DocumentForm);