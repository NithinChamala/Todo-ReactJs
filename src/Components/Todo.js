import React, {  useState, useMemo } from 'react';
import TodoForm from './TodoForm';
import Search from './Search';
import TodoList from './TodoList'
import {connect} from 'react-redux'

const Todo = (props) => {
    const [state,setState] = useState([]);
    const [searchedData,setSearchedData] = useState(null);
    const [searchedStatus,setSearchedStatus] = useState("todo");
    const [input,setinput] = useState();

    // const addTaskHandler = ((task,statusValue) => {
    //   for (let stat of state) {
    //     if(stat.taskName === task) {
    //       alert("task already exists ")
    //       return
    //     }
    //   }
    //   const obj = {}
    //   obj.taskName = task;
    //   obj.status = statusValue;
    //   let prevState = [...state];
    //   prevState.push(obj);
    //   setState(prevState);
    // })
    // const deleteItem = (id ) => {
    //   console.log(id);
    //   const result =  state.filter(word => !(word.taskName == id))
    //   console.log("result",result)
    //   //  const newData = (state.filter(data => {
    //   //     return data.taskName === id
    //   // }))
    //   setState(result);
    // }
    const searchHandler = (data) => {
      console.log("data searching",data);
      setSearchedData(data);

    }

    // const setStatusHandler = (event) => {
    //   console.log(event.target.name);
    //   console.log(event.target.value);
    //   console.log("statusHandler")
    //   let prevstate = state.map((taskobj) => {
    //     if(taskobj.taskName === event.target.name) {
    //       taskobj.status = event.target.value;
    //       console.log("hit here")
    //     }
    //     return taskobj;
    //   })

    //   setState(prevstate);
      
    // }
    const searchStatushandler =(data) => {
      console.log("status searching",data);
      setSearchedStatus(data);
    }
    const onChangeHandler = (value) => {
      setinput(value)
    }

    const todoForm = useMemo(() => {
      return (<TodoForm changed = { (event) =>onChangeHandler(event)} addTask = {(task) => props.submit(task,"todo")}></TodoForm>)
    },[input])

    return (
      <div className="App">
          {todoForm}
        <section>
          <Search searched = { (data) => searchHandler(data)} searchedStatus = {(data) => searchStatushandler(data)}></Search>
           
           <TodoList data = {props.ctrl} onRemoveItem = { (name) => props.delete(name)} searched = {searchedData} searchedStat ={searchedStatus}
           statusHandler = {(event) => { props.setStatusHandler(event)
           }} />
          <div style= {{color:'red'}}></div>
        </section>
      </div>
    )
}
const mapStateToProps = state => {
  console.log("mapping state to props")
  return {
      ctrl : state.listItems
  }
};

const mapDispatchToProps = dispatch => {
  console.log("mapping dispatch to props")
  return {
      submit: (taskName,stat) => dispatch({type: 'ADD',task : taskName ,status : stat}),
      delete : (taskName) => dispatch({type:'DELETE',task:taskName}),
      setStatusHandler : (event) => dispatch({type:'SETSTATUS',task:event.target.name,status :event.target.value})
      // print : () => dispatch({type: 'PRINT'})
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Todo);