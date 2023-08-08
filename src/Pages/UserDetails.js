import React, { useEffect, useState } from 'react';
import Admin from './Admin';
import User from './User';

const UserDetails = () => {
    const [userData,setUserData]=useState('')
    const [admin,setAdmin]=useState(false)
    useEffect(()=>{
        fetch("http://localhost:8000/userData", {
            method: "POST",
            crossDomain: true,
            headers: { "Content-Type": "application/json" },
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            body: JSON.stringify({
              token: window.localStorage.getItem("token"),
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "user Data");
              if(data.data.userType == "Admin"){
                setAdmin(true)
              }
             setUserData(data.data);
            
            });
    },[])
  
      
    return (
        <div>
           {
            admin?<Admin/>:<User/>
           } 
        </div>
    );
};

export default UserDetails;