import React from 'react';


const abbrev = (props) => {

    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   
    let abb = ""
    let str = ""+props.getDate();
    let res = str.slice(-1);
    switch(res) {
        case "1":
        abb = "st"
            break;
        case "2":
        abb = "nd"
            break;
        case "3":
        abb = "rd"
            break;
        default:
        abb = "th"
    }
    if(str === '11'||str === '12'||str === '13' ){
        abb = "th"
    }
    let rentDate = month[props.getMonth()]+', '+props.getDate()+abb+' '+props.getFullYear()
    
    return (
        
       rentDate
      
    )
}

export default abbrev;