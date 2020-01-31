import React from 'react';

const input = (props) => {
    const elem = props.len <5 ? <div>The length is too short </div> : <div>The length is too high</div>;
    return (
        elem
    )
}
export default input;