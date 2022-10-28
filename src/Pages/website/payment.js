import React, { useEffect, useRef, useState } from 'react';
import AddressForm from '../../Components/addressForm';
import InformationalForm from '../../Components/InformationalForm';
import Stripecontainer from '../../Components/StripeContainer';
import './payment.css';

export default function PaymentPage() {
    const [pageActive, setPageActive] = useState(0);
    const [canGoNext, setCanGoNext] = useState(false);

    const sliderRef = useRef();
    const leftBtnRef = useRef();
    const rightBtnRef = useRef();

    function translateSlider(){
        const amount = -33.333333 * Math.abs(0 - pageActive);
        sliderRef.current.style.transform = `translateX(${amount}%)`;
    }

    function disableButtonsOnEdge(){
        if(!leftBtnRef || !rightBtnRef){
            return;
        }

        if(pageActive === 0){
            leftBtnRef.current.style.visibility = 'hidden';
            rightBtnRef.current.style.visibility = 'visible';

        }else if(pageActive === 2){
            leftBtnRef.current.style.visibility = 'visible';
            rightBtnRef.current.style.visibility = 'hidden';
        }else{
            leftBtnRef.current.style.visibility = 'visible';
            rightBtnRef.current.style.visibility = 'visible';
        }
    }

    function nextPage(){
        const bubbles = document.getElementsByClassName('bubble');
        const newIndex = Math.min(2, pageActive + 1); 
        
        if(newIndex !== pageActive){
            bubbles[pageActive].classList.remove('active');
            bubbles[newIndex].classList.add('active');
        }
        
        setPageActive(newIndex);
    }

    function prevPage(){
        const bubbles = document.getElementsByClassName('bubble');
        const newIndex = Math.max(0, pageActive - 1); 

        if(pageActive !== newIndex){
            bubbles[pageActive].classList.remove('active');
            bubbles[newIndex].classList.add('active');
        }

        setPageActive(Math.max(0, pageActive - 1));
    }

    useEffect(() => {
      function alerUser(e){
        const res = window.confirm('Your progresss will be lost and transaction cancelled. Are you sure you want to leave?');

        if(!res){
          e.preventDefault();
          e.returnValue = '';
        }
      } 

      window.addEventListener('beforeunload', alerUser);
      return () => window.removeEventListener('beforeunload', alerUser)
    })

    useEffect(() => {
        translateSlider();
        disableButtonsOnEdge();
    }, [pageActive])

    return(
        <div className='payment-page'>
          <div className='view-content'>
            <div className='view'>
              <div onClick={() => prevPage()} ref={leftBtnRef} className='left-button'>
                <img alt="" className='left-img' src={process.env.PUBLIC_URL + '/Images/arrow.png'}/>
              </div>
              <div onClick={() => nextPage()} ref={rightBtnRef} className='right-button'>
                <img alt="" className='right-img' src={process.env.PUBLIC_URL + '/Images/arrow.png'}/>
              </div>
              <div ref={sliderRef} className='slider'>
                <AddressForm setCanGoNext={val => setCanGoNext(val)}/>
                <Stripecontainer/>
                <InformationalForm/>
              </div>
            </div>
        
            <div className='bubble-container'>
              <div className='bubble active'/>
              <div className='bubble'/>
              <div className='bubble'/>
            </div>
          </div>
        </div>
    );
}