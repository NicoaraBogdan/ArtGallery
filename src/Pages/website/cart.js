import { Dropdown } from '../../Components/controllers';
import './cart.css'
import {useNavigate} from "react-router-dom"

export default function CartPage(){
  const navigate = useNavigate();
  return(
    <section className='cart-page'>
      <span className='title'>Cosul meu</span>
      <main>
        <img alt="" src={process.env.PUBLIC_URL + '/Images/szilvi-profile-web.jpg'}/>
        <div className="info-container">
          <span>This img title</span>
          <span>Some short descfription to fill the page</span>
          <div className='items-in-cart'>
            <span>You have in your cart &nbsp;</span>
            <Dropdown/>
            <span>&nbsp; pices of this item, totaling <strong>10.00$</strong></span>
          </div>
          <span style={{marginTop: 'auto'}}>THIS IS A COPY OF THE ORIGINAL PAINTING</span>
        </div>
      </main>

      <main>
        <img alt="" src={process.env.PUBLIC_URL + '/Images/profile-page-cover.jpg'}/>
        <div className="info-container">
          <span>This img title</span>
          <span>Some short descfription to fill the page</span>
          <div className='items-in-cart'>
            <span>You have in your cart &nbsp;</span>
            <Dropdown/>
            <span>&nbsp; pices of this item, totaling <strong>10.00$</strong></span>
          </div>
          <span style={{marginTop: 'auto'}}>THIS IS A COPY OF THE ORIGINAL PAINTING</span>
        </div>
      </main>

      <span className='total-cost'>Total cost : 100$</span>
      <button onClick={() => navigate('/payment')}>BUY</button>
    </section>
  );
}