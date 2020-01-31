import React, { Component } from 'react';
import { connect } from 'react-redux';
import Print from './print'
class  todo extends Component  {
     state = {
        taskName : 'go to gym',
    }

     taskHandler =(event) => {
        let task = event.target.value
        console.log(task)
        // let prevState = this.state
        this.setState({
            taskName :task
        })
        
   }

   

    render(){
    return (
        <div>
            <p>Add Task</p>
            <input onChange = {this.taskHandler} type ='text' placeholder ='enter task name'></input>
            <button style={{margin: "10px",color: "green"}} onClick = {() => this.props.submit(this.state.taskName)} >Submit</button>
            <br></br>
            <h1 style={{margin: "25px",color: "blue",fontSize: '20px'}}  >Tasks</h1>
            <Print tasks = {this.props.ctrl}></Print>
        </div>

    )
    }

}

const mapStateToProps = state => {
    console.log()
    return {
        ctrl : state.listItems
    }
};

const mapDispatchToProps = dispatch => {
    return {
        submit: (taskName) => dispatch({type: 'ADD',task : taskName }),
        // print : () => dispatch({type: 'PRINT'})
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(todo);