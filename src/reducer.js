// import React from 'react';

let initialState = {
    listItems : [ 
    ]
}

const reducer = (state = initialState, action) => {
    console.log(action.type)
    if (action.type === 'ADD') {
        for (let stat of state.listItems) {
            if(stat.taskName === action.task) {
                alert("task already exists ")
                return {
                    listItems : state.listItems
                }
            }
        }
        console.log("reducer add",state);
        const obj = {}
        obj.taskName = action.task;
        obj.status = action.status;
        let prevState = [...state.listItems];
        prevState.push(obj);
        return {
            listItems : prevState
        }
    }
    if (action.type === 'DELETE') {
        
        const result =  state.listItems.filter(word => !(word.taskName === action.task))
        console.log("result",result)
        return{
            listItems:result
        }
    }
    if (action.type === 'SETSTATUS') { 
        console.log("state in status change",state)
        let prevState = state.listItems.map((taskobj) => {
            if(taskobj.taskName === action.task) {
                taskobj.status = action.status;
                console.log("status change")  
            }
            return taskobj
        })
        return {
            listItems : prevState
        }
    }
    return state;
}

export default reducer;