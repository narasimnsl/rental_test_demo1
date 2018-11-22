import React from 'react';


const abbrev = (props) => {

    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   

    let abb = ""
    let str = props.getDate()
    switch(str) {
        case 1:
        abb = "st"
            break;
        case 2:
        abb = "nd"
            break;
        case 3:
        abb = "rd"
            break;
        default:
        abb = "th"
    }

    let rentDate = month[props.getMonth()]+', '+props.getDate()+abb+' '+props.getFullYear()
    
    return (
        
       rentDate
      
    )
}

export default abbrev;