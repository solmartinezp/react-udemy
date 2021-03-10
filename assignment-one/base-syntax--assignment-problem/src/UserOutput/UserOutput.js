import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Hola como andas? {props.username}</p>
            <p>Todo bien vos?</p>
        </div>
    ) 
}

export default userOutput;