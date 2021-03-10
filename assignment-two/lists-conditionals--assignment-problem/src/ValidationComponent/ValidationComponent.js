import React from 'react';

const ValidationComponent = (props) => {
    let length= props.length;
    let text= null;

    if (length===0) {
        text= '';
    } else if (length<=5) {
        text= 'Text too short';
    } else {
        text= 'Text ok'
    }

    return (
        <div>
            <p>{text}</p>
        </div>
    ) 
}

export default ValidationComponent;