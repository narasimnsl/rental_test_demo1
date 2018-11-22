import React, { Component } from 'react';
import Aux from '../../../hoc/aux';
import {connect} from 'react-redux';
import axios from 'axios';
import Rent from './rent'

class  Page1 extends Component {
    state = {
        rentData:{},
        dataLoaded:false,
    }

    
    componentDidMount (){
      
        if(this.props.idVal===""){
            this.props.history.push("/");
            return;
        }
        let url = "https://hiring-task-api.herokuapp.com/v1/leases/"+this.props.idVal
        axios.get(url).then(response =>{
            
            this.setState({rentData:response.data,dataLoaded:true})
            
        })
    }
    

    render(){
       
        let rentDate = ""
        if(this.state.dataLoaded){
            rentDate= (<Rent rentVals={this.state.rentData}/>);
            console.log(this.state.rentData)
        }
        return(
            <Aux>
            <div>
                <p>Your ID:{this.state.rentData.id}</p>
                <p>Please find below your <strong>Rent Payments History</strong></p>
                {rentDate}
                
            </div>
        </Aux>
    
        )

    }
    
    
}
const mapStateToProps = state => {
    return{
        idVal:state.id_val
    }
}



export default connect(mapStateToProps)(Page1); 