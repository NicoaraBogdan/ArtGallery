import './controllers.css'
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function Button({
    text= "Test",
    
    handleClick,
    width = '200px',
    height = '40px',
    fontSize = '24px',
    fontFamily,
    color
}){
    return(
        <div
            onClick={handleClick}
            style={{width: width, height: height, backgroundColor: color?.background}} 
            className='button'>
            <span style={{fontSize : fontSize, fontFamily: fontFamily, color: color?.label}}>
                {text}
            </span>
        </div>
    );
}

export function Input({
    label = 'test',
    placeholder = 'placeholder',
    error = null,
    readonly = false,
    value = null,
    setValue,
    color
}){
    return(
        <div className='input-container'>
            <div className='input-label' style={{color: color?.label}}>
                {label}
            </div>
            <input value={value} readOnly={readonly} onChange={e => setValue(e.target.value)} placeholder={placeholder}/>
            <div className='error-message'>{error}</div>
        </div>
    );
}

export function Dropdown({headerValue = 1, values=[1, 2, 3, 4, 5]}){
  const [isOpenned, setIsOpenned] = useState(false);
  const [selectedItem, setSelectedItem] = useState(headerValue);
  
  const arrowRef = useRef();
  const listRef = useRef();

  const handleSelectedItem = e => {
    if(e.target.childElementCount === 0){
      setSelectedItem(e.target.innerHTML);
    }else{
      setSelectedItem(e.target.children[0].innerHTML);
    }
    setIsOpenned(false);
  }

  useEffect(() => {
    console.log(arrowRef);
    const ddList = listRef.current;
    const ddArrow = arrowRef.current;

    if(isOpenned){
      if(ddList || ddArrow){
        ddList.style.height = '100px';
        ddList.style.border = '1px solid black';
        ddArrow.style.transform = 'rotate(180deg)'
      }
    }else{
      if(ddList || ddArrow){
        ddList.style.height = '0';
        ddList.style.border = 'none';
        ddArrow.style.transform = 'rotate(0deg)'
      }
    }
  }, [isOpenned])

  return(
    <div className='dd-container'>
      <div onClick={() => setIsOpenned(!isOpenned)} className='header'>
        <span>{selectedItem}</span>
        <img 
          ref={arrowRef}
          height='24px'
          src={process.env.PUBLIC_URL + '/Images/dd-arow.png'}
          alt=""/>
      </div>
      <div ref={listRef} className='list'>
        {values.map((value, index) => 
          <div onClick={(e) => handleSelectedItem(e)} key={index} className='item'>
            <span>{value}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function TopNavBar(){
  const navigate = useNavigate();

  useEffect(() => {
    const endpoint = document.URL.split('/')[3];
    const textToHighlight = document.getElementById(endpoint);
    textToHighlight.style.color = 'black'
  })

  return(
      <div className='nav-bar-container'>
        <div className='links-container'>
          <a id='home' href='/home'>
            <span>Home</span>
          </a>
          <a id='about' href='/about'>
            <span>About</span>
          </a>
          <a id='shop' href='/shop'>
            <span>Shop</span>
          </a>
          <a id='contact' href='/contact'>
            <span>Contact</span>
          </a>
        </div>

        <img 
          onClick={() => navigate('/cart')}
          src={process.env.PUBLIC_URL + "/Images/shopping-cart.png"} 
          alt=""/>

      </div>
);}

export function ImageAndTextRow({url = '/Images/szilvi-profile-web.jpg', text= 'asdddddd dddddddddddddddddddddddddd ddddddddddddddd ddijfhewbfui ebufhaeiofae',
    isReversed = false}){
    
    const flexDirection = isReversed ? 'row' : 'row-reverse';

    return(
        <div style={{flexDirection: flexDirection}} className='image-text-row-container'>
            <div>
                <img src={process.env.PUBLIC_URL + url} alt=""/>
            </div>
            <div>
                <span>
                    {text}
                </span>
            </div>
        </div>
    );
}