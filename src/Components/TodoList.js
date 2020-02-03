import React from 'react';
import './TodoList.css'

const TodoList = (props) => {
    console.log("props.data",props.data)
    console.log("props.searched",props.searched);
    console.log("props.searchedStatus",props.searchedStat);

    if(props.searchedStat === "all") {
        return (
            <section className ="todo-list">
            <h2 style= {{color:'green'}}>Total Tasks</h2>
            <ul>
            {props.data.map(ig => 
            {
            if(!props.searched) {
                    return (    
                    <li key={ig.taskName} >
                        <span onClick={() => props.onRemoveItem(ig.taskName) }>{ig.taskName} </span>
                        {/* <span>{ig.status}</span> */}
                        <span>
                            <select name = {ig.taskName} onChange ={(event) => props.statusHandler(event)}>
                                <option value="todo"selected = {ig.status === "todo"} >todo</option>
                                <option value="inprogress" selected = {ig.status === "inprogress"} >inprogress</option>
                                <option value="done" selected = {ig.status === "done"}>done</option>
                            </select>
                        </span>
                    </li>
                    )
            }
              else {
                  console.log("ig.status",ig.status);
                  console.log("props.searchedStat",props.searchedStat)
                if(ig.taskName.slice(0,props.searched.length) === props.searched )
                {
                  return (
                    <li key={ig.taskName} >
                    <span onClick={() => props.onRemoveItem(ig.taskName) }>{ig.taskName}</span>
                    {/* <span>{ig.status}</span> */}
                    <span>
                        <select name = {ig.taskName} onChange ={(event) => props.statusHandler(event)}>
                              <option value="todo" selected = {ig.status === "todo"}>todo</option>
                              <option value="inprogress" selected = {ig.status === "inprogress"}>inprogress</option>
                              <option value="done" selected = {ig.status === "done"}>done</option>
                        </select>
                    </span>
                  </li>
                  )
                }
                else ;
              }
            }
          )}
            </ul>


            </section>

        )
    }

    return (
        <section className="todo-list">
        <h2 style= {{color:'green'}}>Total Tasks</h2>
        <ul>
          {props.data.map(ig => 
            {
            if(!props.searched) {
                if(props.searchedStat === ig.status)
                    return (    
                    <li key={ig.taskName} >
                        <span onClick={() => props.onRemoveItem(ig.taskName) }>{ig.taskName} </span>
                        {/* <span>{ig.status}</span> */}
                        <span>
                            <select name = {ig.taskName} onChange ={(event) => props.statusHandler(event)}>
                                <option value="todo"selected = {ig.status === "todo"} >todo</option>
                                <option value="inprogress" selected = {ig.status === "inprogress"} >inprogress</option>
                                <option value="done" selected = {ig.status === "done"}>done</option>
                            </select>
                        </span>
                    </li>
                    )
                else ;
            }
              else {
                  console.log("ig.status",ig.status);
                  console.log("props.searchedStat",props.searchedStat)
                if(ig.taskName.slice(0,props.searched.length) === props.searched && ig.status === props.searchedStat)
                {
                  return (
                    <li key={ig.taskName} >
                    <span onClick={() => props.onRemoveItem(ig.taskName) }>{ig.taskName}</span>
                    {/* <span>{ig.status}</span> */}
                    <span>
                        <select name = {ig.taskName} onChange ={(event) => props.statusHandler(event)}>
                              <option value="todo" selected = {ig.status === "todo"}>todo</option>
                              <option value="inprogress" selected = {ig.status === "inprogress"}>inprogress</option>
                              <option value="done" selected = {ig.status === "done"}>done</option>
                        </select>
                    </span>
                  </li>
                  )
                }
                else ;
              }
            }
          )}
        </ul>
      </section>
    )
}

export default TodoList;