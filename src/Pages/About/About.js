import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import testApi from '../../api/testApi';
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from '../../components/ErrorBoundary';

const About = () => {

    let navigate = useNavigate();
    const[count,setCount]  = useState(0)
    
    useEffect( () => {
        console.log('sdssds');

        var pageView = sessionStorage.getItem("pageView");
        if (pageView == null) {
          // Initialize page views count
          pageView = 1;
        } else {
          // Increment count
          pageView = Number(pageView) + 1;
        }
        // Update session storage
        sessionStorage.setItem("pageView", pageView);
        setCount(pageView);
       /*  const request  = testApi.fechApiDetails();
       
        request
        .then(result => console.log('About Inside result:', result.data.data))
        .catch(error => console.error('About Inside error:', error)) */
      
    },[])


    function removeItem() {//deletes item from sessionStorage
      sessionStorage.removeItem('pageView');
      setCount(0);
      console.log("remove items");
    }

    function handleClick(){
        console.log('sdsds');
        navigate('/login');
    }

    function Greeting({subject}) {
      return <div>Hello</div>
    }
    
    function Farewell({subject}) {
      return <div>Goodbye</div>
    }
    
    return (
        <div>
          <h3>{count}</h3>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Greeting />
            <Farewell /> <br />
        </ErrorBoundary>
          <button onClick={removeItem}> Clear Session </button> <br /> <br />
          <button onClick={handleClick}> Redirection check </button>
        </div>
    );
  }

export default About;