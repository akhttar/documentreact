import React from   'react';
import ReactHtmlParser from 'react-html-parser'; 

const ResponseDisplay = (props) =>{
    const dispalystyle = 'list-inline ml-2 mb-2 ' + props.displayColor;
    return(
        <React.Fragment>
            <div className={props.isHide}>
              <div className={dispalystyle}> {ReactHtmlParser(props.displayMessage)} </div>
            </div>
        </React.Fragment>
    )
}
export default ResponseDisplay;