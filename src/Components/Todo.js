import React, {  useState, useMemo } from 'react';
import TodoForm from './TodoForm';
import Search from './Search';
import TodoList from './TodoList'
import {connect} from 'react-redux'

const Todo = (props) => {
    const [searchedData,setSearchedData] = useState(null);
    const [searchedStatus,setSearchedStatus] = useState("todo");
    const [input,setinput] = useState();


    const searchHandler = (data) => {
      console.log("data searching",data);
      setSearchedData(data);

    }


    const searchStatushandler = (data) => {
      console.log("status searching",data);
      setSearchedStatus(data);
    }
    const onChangeHandler = (value) => {
      setinput(value)
    }

    const todoForm = useMemo(() => {
      return (<TodoForm changed = { (event) => onChangeHandler(event)} addTask = {(task) => props.submit(task,"todo")}></TodoForm>)
    },[input])

    return (
      <div className = "App">
          {todoForm}
        <section>
          <Search searched = { (data) => searchHandler(data)} searchedStatus = {(data) => searchStatushandler(data)}></Search>
           
           <TodoList data = {props.ctrl} onRemoveItem = { (name) => props.delete(name)} searched = {searchedData} searchedStat ={searchedStatus}
           statusHandler = {(event) => { props.setStatusHandler(event)
           }} />
          <div style = {{color:'red'}}> </div>
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
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Todo);