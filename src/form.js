import React  from 'react';
// import FormElement from './formElement';
import './form.css';
class  form extends React.Component {
    state = {
        properties : {
            type : 'text',
            validation : {
                required : true,
                minlength : 2
            }
        },

        formElements : {
            name : {
                placeholder : 'Enter Your name',
                type : 'text',
                validation : {
                    required : true,
                    minlength : 5
                }
            },

            age : {
                placeholder : "Enter your age",
                type : 'number',
                validation : {
                    required : true,
                }
            },

            pincode : {
                placeholder : "Enter your pincode",
                type : 'number',
                validation : {
                    required : true,
                    minlength : 5
                }
            }

        },
        isValid : true,
        nullField : false,
        minlengthField : false
    }

     validation = (event) => {
         let value = event.target.value;
         console.log("value",value);
         let name = event.target.name;
         console.log("name",name)
         let dist = value.length;
         console.log("dist",dist);
         let isValidlocal  = true;
         let nullField = true;
         let minlengthField = true;
        console.log(this.state.formElements[name].validation.required);
         if(this.state.formElements[name].validation.required) {
             console.log(value);
            if(value === '') {
                // alert({name},"cannot be null");
                
                nullField = false;
            }
         }

         if(this.state.formElements[name].validation.minlength) {
            if(dist < this.state.formElements[name].validation.minlength){
                minlengthField = false;
            } 
            else {
                minlengthField = true;
            }
         }
         isValidlocal = nullField && minlengthField;
         console.log(nullField,minlengthField,isValidlocal);
         this.setState({isValid : isValidlocal})
    }

    submit = (event) => {
        if(!this.state.isValid) {
            alert("Form is not Valid");
        }
    }

    render () {
        const formElemetsArray = [];
        for (let element in this.state.formElements) {
            formElemetsArray.push({
                id : element,
                attributes : this.state.formElements[element]
            })
        }
        // console.log(formElemetsArray);
        //   let form = ( 
        //       <form>
        //       { 
        //        formElemetsArray.map((data) => {
        //         // <input key = {data.id} name = {data.id} placholder = {data.attributes.placeholder}></input>
        //         // <FormElement />
        //         })
            
        //     }</form>
        //     )
        return (
            <form className = 'form' >
                {/* <h1>Hello</h1>
                <p>Enter your name:</p>
                <input
                type="text"
                /> */}
                {
                    formElemetsArray.map(data => 
                         <input onChange = {this.validation} name = {data.id} className = 'input' key= {data.id} placeholder = {data.attributes.placeholder}></input>
                    )
                }
                <button onClick = {this.submit} >Submit</button>
          </form>
        )
    }
}

export default form;