import { TopNavBar } from '../../Components/controllers';
import './contact.css'

export default function ContactPage(){
  return(
    <div className='contact-page'>
      <TopNavBar/>
      <section>
        <main>
          <span className='title'>CONTACT</span>
          <div>
            <img 
              src={process.env.PUBLIC_URL + '/Images/callicon.png'}
              alt=''/>
            <span>You can contact us at: <span style={{textDecoration: 'underline', color: 'blue'}}>+04123456789</span></span>
          </div>

          <div>
            <img 
              src={process.env.PUBLIC_URL + '/Images/e-mail-icon.png'}
              alt=''/>
            <span>Or you can send an email at: <span style={{textDecoration: 'underline', color: 'blue'}}>nume_prenume@gmail.com</span></span>
          </div>
        </main>
      </section>

    </div>
  );
}