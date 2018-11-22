import React, { Component } from 'react';
import Aux from '../../../hoc/aux'
import introCss from './intro.css';
import {connect} from 'react-redux';


class Intro extends Component{
    state = {
        inputVal:"",
        validateError:"er0",
    }
   
     submitBtnHandler = () => {
         
         if(this.state.inputVal === ""){
            this.setState({validateError: "er2"})
         }else{
            this.props.history.push("/report");
         }
         
         this.props.dispatch({
            type: 'UPDATE_ID',
            value: this.state.inputVal
        });
        
      }

    validateNumber = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({inputVal: e.target.value})
            this.setState({validateError: ""})
        }else{
            this.setState({validateError: "er1"})
        }
    };



    render(){
        let errorInfo= ""
        
        switch(this.state.validateError) {
            case "er0":
            errorInfo= "Note: You id is the Numerical Id provided in the rental agreement."
                 break;
            case "er1":
            errorInfo= "Your ID must be Numeric only"
                break;
            case "er2":
                errorInfo="Please Enter Valid ID"
                break;
            default:
            errorInfo= ""
        }


        return(
        <Aux>
            <div>
                <h2>Welcome to the Rental History Portal</h2>
                <p>To know your upcoming rent payments key in your <strong>ID</strong> and click <strong>submit</strong></p>
                <br></br>
                <center>
                    <input autoFocus maxLength={10} value={this.state.inputVal} onChange={this.validateNumber} type="text"/>
                    <p className={introCss.instructionText}>{errorInfo}</p>
                    <button className={introCss.submitButton} onClick={this.submitBtnHandler}>Submit</button>
                </center>
               
                
            </div>
        </Aux>
        )

    }
    
}

const mapStateToProps = state => {
    return{
        
        introState:state.id_val
    }
}



export default connect(mapStateToProps)(Intro); 