import React from    'react';
import {Link} from 'react-router-dom';

class DocumentListData extends React.Component{
    constructor(props){
        super(props);
    }
    //  onEdit=()=>{
    //     return(
    //         <div> <Link to ="/stream/new"></Link> </div>
    //     )
    //    // alert(event.target.value);
    // }
    render(){
        
        return(
            <React.Fragment>
                <div className="container gridHeader">
                    <div className="row mb-1 text-muted font-weight-bold">
                        <div className="col-lg-2 col-md-2"> Title</div>
                        <div className="col-lg-4 col-md-4">Description</div>
                        <div className="col-lg-2 col-md-2">Publisher</div>
                        <div className="col-lg-1 col-md-1"></div>
                        <div className="col-lg-1 col-md-1"></div>
                    </div>

                    {
                      this.props.documentlistdata.length> 0 ? this.props.documentlistdata.map(x=>{
                            if(x.Title !== ''){
                          return(  <div key={x.id} className="row border-top">
                            <div className="col-lg-2 col-md-2"> {x.Title}</div>
                            <div className="col-lg-4 col-md-4">{x.Description} </div>
                            <div className="col-lg-2 col-md-2">{x.Publisher}</div>
                            <div className="col-lg-1 col-md-1">
                               <Link className=" btn-primary btnsize" to={"/document/new/id:" + x.id}>Edit</Link>
                            </div>
                            <div className="col-lg-1 col-md-1">
                            <Link to="/" className=" btn-danger btnsize">Delete</Link>
                            </div>
                        </div>
                        )
                    }
                        }) :null
                    }
                    
                </div>
            </React.Fragment>
        )
    }
}
export default DocumentListData;