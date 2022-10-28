import { useEffect, useState } from "react";
import "./addressForm.css";
import { Input, Button } from "./controllers";

export default function AddressForm({setCanGoNext}) {
  const [country, setCountry] = useState('');
  const [county, setCounty] = useState('');
  const [city, setCity] = useState('');
  const [streetAndNumber, setStreetAndNumber] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [person, setPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [note, setNote] = useState('');

  return (
    <div className="address-form-container">
      <div className="title-container">
        <span className="title">Address Form</span>
        <span className="subtitle">
          Please complete with the address where you want to recive the painting
        </span>
      </div>

      <div className="input-container-parent">
        <div className="input-container-left">
          <Input label="Country" value={country} setValue={e => setCountry(e)}/>
          <Input label="County" value={county} setValue={e => setCounty(e)}/>
          <Input label="City" value={city} setValue={e => setCity(e)}/>
          <Input label="Street name and number" value={streetAndNumber} setValue={e => setStreetAndNumber(e)}/>
          <Input label="Zipcode" value={zipcode} setValue={e => setZipcode(e)}/>
        </div>
        <div className="input-container-right">
          <Input label="Person of contact" value={person} setValue={e => setPerson(e)}/>
          <Input label="Phone number with contry prefix" value={phone} setValue={e => setPhone(e)}/>
          <Input label="Email address" value={email} setValue={e => setEmail(e)}/>
          <Input label="Adittional info" value={additionalInfo} setValue={e => setAdditionalInfo(e)}/>
          <Input label="Note" value={note} setValue={e => setNote(e)}/>
        </div>
        <div>

        </div>
      </div>
      <div className="delivery-buttons">
        <input type="checkbox"/>
        <span>Outside Europe delivery</span>
      </div>
    </div>
  );
}
