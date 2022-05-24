import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = (props) => {

    const navigate = useNavigate();
    let { Component } = props;
      

    useEffect( () => {
      const timer = setTimeout(() => { 
        console.log('This will run after 1 second!')
      }, 200);
    
      var page_count = sessionStorage.getItem("pageView");
      console.log('page_count', page_count);

      if(page_count > 10){
        navigate('/login'); 
      }
       
      
    },[])

    return (
        <div>
          < Component  />
        </div>
    );
  }

export default ProtectedRoutes;