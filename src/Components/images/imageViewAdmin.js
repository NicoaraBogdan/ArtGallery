import './imageViewAdmin.css';
import { Input, Button } from '../controllers';
import { useRef, useState } from 'react';
import { Images } from '../../API';
import { ImageDTO, imageUpdateDTO } from '../../API/models/images';
import ImageCard from './imageCard';

export default function ImageViewAdmin({hasAddButton = false, image}){
  const [imgBase64, setImgBase64] = useState(image?.imgBase64);
  const [name, setName] = useState(image?.name);
  const [price, setPrice] = useState(image?.price);
  const [discount, setDiscount] = useState(image?.discount);
  const [size, setSize] = useState(image?.size);
  const [tehnique, setTehnique] = useState(image?.tehnique);
  const [description, setDescription] = useState(image?.description);

  const inputRef = useRef();

  function handleFileChange(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgBase64(reader.result);
      console.log(reader.result);
    }
  }

  async function uploadImage(){
    await Images.add({
      imgBase64: imgBase64,
      name: name,
      price: price,
      description: 'fake',
      tehnique: 'tehnique',
    })
  }

  return(
    <div className='image-view-admin-page'>
      <div className='image-container'>
        <input 
          ref={inputRef} 
          style={{display: 'none'}} 
          onChange={(e) => handleFileChange(e)}
          type="file"  
          accept="image/jpeg"/>
          <div className='d-flex w-100'>
            <div onClick={() => inputRef.current.click()} className='preview-image'>
              <ImageCard adminView={true} base64={imgBase64} price={price} size={size} tehnique={tehnique}/>
            </div>
            <div className='inputs-grid'>
              <Input color={{label: '#fff'}} label='Name' setValue={e => setName(e)} value={name}/>
              <Input color={{label: '#fff'}} label='Price' setValue={e => setPrice(e)} value={price}/>
              <Input color={{label: '#fff'}} label='Discount' setValue={e => setDiscount(e)} value={discount}/>
              <Input color={{label: '#fff'}} label='Description' setValue={e => setDescription(e)} value={description}/>
              <Input color={{label: '#fff'}} label='Tehnique' setValue={e => setTehnique(e)} value={tehnique}/>
              <Input color={{label: '#fff'}} label='Size' setValue={e => setSize(e)} value={size}/>
            </div>
          </div>

          {hasAddButton && (
            <Button 
              handleClick={() => uploadImage()}
              text='Add' 
              color={{background: '#f2b449'}}/>)}
        </div>
    </div>
  )
}