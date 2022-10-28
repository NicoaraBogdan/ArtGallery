import './home.css';
import { useNavigate } from "react-router-dom";
import { Button, TopNavBar } from '../../Components/controllers';

export default function HomePage(){
    const navigate = useNavigate();

    return(
        <div className='profile-page-container'>
            <TopNavBar/>
            <img className='cover' src={process.env.PUBLIC_URL + "/Images/profile-page-cover.jpg"} alt=""/>
            <div className='info-container'>
              <div className='actions'>
                <button onClick={() => navigate('/shop')}>
                  <span>SALE</span>
                </button>  

                <button onClick={() => navigate('/shop')}>
                  <span>NEW WORK</span>
                </button>

                <button  onClick={() => navigate('/about')} style={{"backgroundColor": "transparent", "color": "#fff"}}>
                  <span>NEWS</span>
                </button>
              </div>
              
              <div className='text-container'>
                <div style={{"fontSize": "80px"}}>
                  <span><strong>WELCOME</strong></span>
                </div>
                <div className='to-my'>
                  <span><strong>to</strong> my art world!</span>
                </div>
              </div>
            </div>  
        </div>
    );
}