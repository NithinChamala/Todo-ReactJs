import React from 'react';

const input = (props) => {
    return (
        <div>
            <input type ="text" onChange = {props.changed}/>
            {/* <div>the length of input field is {props.length}</div> */}
        </div>
    )
}
export default input;