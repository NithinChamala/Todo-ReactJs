import React, { Component } from 'react';

const print = (props) => {
    console.log("props in printjs",props)
    return (
        <div>
            <ul style={{marginLeft: "0px",color: "blue",fontSize: '20px'}}>
            
            {props.tasks.map(item => {
                console.log(item)
            return <li key ={item.itemName}>{item.itemName} ::: {item.status}</li>
            })   }
            </ul>
        </div>
    )
}

export default print;