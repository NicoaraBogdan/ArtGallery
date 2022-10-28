import './orders.css';
import { Button, Input } from '../../Components/controllers';
import { Transactions } from '../../API';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { StatusMapper } from '../../Utils/mappers';

export default function OrdersPage(){
  const [orders, setOrders] = useState([]);

  function deliver(orderId){
    Transactions.setStatus(StatusMapper.Delivered, 3)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get('https://localhost:7056/api/Transaction/address')
    .then(res => {
      console.log(res.data);
      setOrders(res.data);
    })
    .catch(err => console.log(err))
  }, [])

  return(
    <div className='orders-page'>
      <span className='title'>Orders</span>
      <div className='orders-container'>
        {orders?.map(order => {
          console.log(order);
          return(
            <div className='order'>
              <Input readonly={true} color={{label : '#fff'}} label="Country" value={order.country}/>
              <Input readonly={true} color={{label : '#fff'}} label="County"/>
              <Input readonly={true} color={{label : '#fff'}} label="City" value={order.city}/>
              <Input readonly={true} color={{label : '#fff'}} label="Street name and number" value={order.street}/>
              <Input readonly={true} color={{label : '#fff'}} label="Zipcode" value={order.postcode}/>

              <Input readonly={true} color={{label : '#fff'}} label="Person of contact" value={order.personOfContact}/>
              <Input readonly={true} color={{label : '#fff'}} label="Phone number with contry prefix" value={order.phoneNumber}/>
              <Input readonly={true} color={{label : '#fff'}} label="Email address" />
              <Input readonly={true} color={{label : '#fff'}} label="Adittional info" value={order.additionalInformation}/>
              <Input readonly={true} color={{label : '#fff'}} label="Note" />

              <Button text='Deliver' handleClick={() => deliver()} color={{background: '#f2b499'}}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}


