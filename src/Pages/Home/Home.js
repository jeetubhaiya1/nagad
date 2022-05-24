import React, { useEffect } from 'react';
import testApi from '../../api/testApi';
import { useForm } from "react-hook-form";



const Home = () => {

    useEffect( () => {
      
      const timer = setTimeout(() => {
        const request  = testApi.fechAllDetails();
        request
        .then(result => console.log('(1) Inside result:', result.data.data))
        .catch(error => console.error('(1) Inside error:', error))
        console.log('This will run after 1 second!')
      }, 2000);
    
        //console.log('sdssds');
       
      
    },[])

    return (
        <div>
          <h2>Home Page setup</h2>
        </div>
    );
  }

export default Home;