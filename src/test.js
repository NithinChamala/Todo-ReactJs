import React, { useEffect, useState , useReducer,useRef} from 'react';

// const Example = () => {
//     const [count, setState] = useState(0);


//     useEffect ( () => {

//         document.title = `You clicked ${count} times ComponentDidMount`;
//         console.log(document.title)
//         document.title = `You clicked ${count} times in ComponentDidUpdate`;
//         console.log(document.title)

//         return (() => {

//             document.title = `You clicked ${count} times in ComponentwillUmnount`;
//             console.log(document.title)
//         })
//     })

//     return (
//         <div>
//           <p>You clicked {count} times</p>
//           <button onClick={() => setState(count + 1 )}>
//             Click me
//           </button>
//         </div>
//       );
// }
function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }
// function init(initialCount) {
//     return {count: initialCount};
//   }
  
//   function reducer(state, action) {
//     switch (action.type) {
//       case 'increment':
//         return {count: state.count + 1};
//       case 'decrement':
//         return {count: state.count - 1};
//       case 'reset':
//         return init(action.payload);
//       default:
//         throw new Error();
//     }
//   }
  
//   function Counter(props) {
//     let initialCount = props.initialCount;
//     const [state, dispatch] = useReducer(reducer, initialCount, init);
//     return (
//       <>
//         Count: {state.count}
//         <button
//           onClick={() => dispatch({type: 'reset', payload: initialCount})}>
  
//           Reset
//         </button>
//         <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//         <button onClick={() => dispatch({type: 'increment'})}>+</button>
//       </>
//     );
//   }
  


// class Example extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0
//       };
//     }
  
//     componentDidMount() {
//         setTimeout(() => {
            
//             document.title = `You clicked ${this.state.count} times ComponentDidMount`;
//             console.log(document.title)
//         }, 1000);
//     }
  
//     componentDidUpdate() {
//         setTimeout(() => {

//       document.title = `You clicked ${this.state.count} times in ComponentDidUpdate`;
//       console.log(document.title)
//         },1000)
//     }

//     componentWillUnmount() {
//         setTimeout(() => {

//       document.title = `You clicked ${this.state.count} times in ComponentwillUmnount`;
//       console.log(document.title)
//         },1000)
//     }


  
//     render() {
//       return (
//         <div>
//           <p>You clicked {this.state.count} times</p>
//           <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//             Click me
//           </button>
//         </div>
//       );
//     }
//   }

  export default TextInputWithFocusButton;