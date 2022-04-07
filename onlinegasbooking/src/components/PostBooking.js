import React from 'react'
import gasbookingService from '../services/gasbooking-service';
import {useState} from 'react';

function PostBooking() {
    const[myAccount , setMyAccount]=useState(
   
        {
            "gasbookingId": "",
            "bookingDate": "",
            "status": "",
            "bill":""   
        }
      );
      const changeHandle = (e)=>{
        setMyAccount((oldAccount)=>({...oldAccount,[e.target.name]: e.target.value}));
     
        
    };
    const submitHandler = (e)=>{
  
        e.preventDefault();
        
        console.log(myAccount);
        gasbookingService.create(myAccount)
        
        
        .then((r)=>{console.log(r.data)})
        .catch((e)=>{console.log(e.response.data)})
       
      
      };

  return (
    <div>
        Booking Id:
        <input type="number" name= "gasbookingId" value={myAccount.gasbookingId} /><br/><br/>
        <form onSubmit={submitHandler} >
    
        Booking Date:
        <input type="date"  name="bookingDate" onChange={changeHandle} required/><br/><br/>
        Status:
        <input type="text" name= "status" value={myAccount.status} onChange={changeHandle} required/><br/><br/>
        
        Bill:
        <input type="number" name= "bill" value={myAccount.bill} onChange={changeHandle} required/><br/><br/>
    
        <input type="submit" value="submit" className="btn btn-info"/>

        </form>
    </div>
  )
}

export default PostBooking
