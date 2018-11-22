import React from 'react';
import Abb from './abbrev'
import Table from 'rc-table';
import TableCss from './table.css'

const rent = (props) => {
    let firstRent = ""
    let startDate = new Date(props.rentVals.start_date)
    let endDate = new Date(props.rentVals.end_date);
    const data = [];

    
    let freq = 0;
    switch(props.rentVals.frequency) {
        case "weekly":
            freq = 7
            break;
        case "fortnightly":
             freq = 14
            break;
        case "monthly":
              freq = 28
            break;
        default:
            freq = 14
    }

  
    let paymentDay = 0;
    switch(props.rentVals.payment_day) {
        case "monday":
            paymentDay = 1
            break;
        case "tuesday":
            paymentDay = 2
            break;
        case "wednesday":
            paymentDay = 3
            break;
        case "thursday":
            paymentDay = 4
            break;
        case "friday":
            paymentDay = 5
            break;
        default:
            paymentDay = 1
    }



    let rentPerDay = (props.rentVals.rent/7);


    /*  First Rent Calculator*/

    let firstRentStart = Abb(startDate)
    let firstDays = 0
    if(startDate.getDay()<paymentDay){
        firstDays = (paymentDay-startDate.getDay())    
    }else{
        firstDays = 7-startDate.getDay()+paymentDay
        
    }
    startDate.setDate(startDate.getDate() + (firstDays-1));
    let days  = firstDays.length === 1 ? "Day" :"Days"
    data.push({ From: firstRentStart, To: Abb(startDate), Days: firstDays, Rent:'$'+(firstDays*rentPerDay).toFixed(1) })
   
     /* Loop  Rent Calculator*/
    let loopRentLast = "";
    while (startDate < endDate) {
        startDate.setDate(startDate.getDate()+1);
        let nextRentStart = Abb(startDate)
        
        startDate.setDate(startDate.getDate() + (freq-1));
        if(startDate > endDate){
            break;
        }
        loopRentLast = new Date(startDate.valueOf());
        data.push({ From: nextRentStart, To: Abb(startDate), Days: freq, Rent:'$'+(freq*rentPerDay).toFixed(1) })
 
    }
     /*  Final Rent Calculator*/
    
    var lastRentDays = endDate.getDate()-loopRentLast.getDate();
    if(lastRentDays>0){
        loopRentLast.setDate(loopRentLast.getDate()+1);

        data.push({ From: Abb(loopRentLast), To: Abb(endDate), Days: lastRentDays, Rent:'$'+(lastRentDays*rentPerDay).toFixed(1) })
    }

    const columns = [{
        title: 'From', dataIndex: 'From', key:'From', 
      }, {
        title: 'To', dataIndex: 'To', key:'To', 
      }, {
        title: 'Days', dataIndex: 'Days', key:'Days', 
      }, {
        title: 'Rent', dataIndex: 'Rent', key:'Rent', 
      }];
      
      
      

    return (
        
        <div>
            
             <Table columns={columns} data={data} className={TableCss.rentTable}/>
             
        </div>

        

    )
}

export default rent;