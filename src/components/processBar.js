import React from    'react';
const ProcessBar = (props) =>{
    const showProgressBar = 'processBar ' + props.showProcessBar;
    
    return(
        <React.Fragment>    
            <div className={showProgressBar}>
               <div className="processBar_gif">
               </div>
            </div>
        </React.Fragment>
    )
}
export default ProcessBar;