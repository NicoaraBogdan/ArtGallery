import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../../Components/controllers';
import './loginPage.css';

export default function LoginPage(){
  const navigate = useNavigate();
  
  return(
    <div className='d-flex container-fluid' style={{minHeight: '100vh'}}>
      <div className='login-page'>
        <span>Login</span>
        <Input label='Username' color={{label: '#fff'}}/>
        <Input label='Password' color={{label: '#fff'}}/>
        <Button 
          handleClick={() => navigate('/admin/home')}
          text="Login"
          color={{background: '#f2b449'}}/>
      </div>
    </div>
  )
}