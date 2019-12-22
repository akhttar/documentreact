import React from   'react';

const  Header = ()=>{
    return(
        <React.Fragment>
            <div className="container">
            <div className="bg-secondary p-4 mt-1 text-center text-danger" >
                <h3 className="display-5 font-weight-normal">Document World</h3>
                <span>Add document in list</span>
            </div>
            </div>
        </React.Fragment>
    )
}
export default Header;