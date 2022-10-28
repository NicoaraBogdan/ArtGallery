import { useEffect, useState } from 'react';
import { Images } from '../../API';
import { Button, Input } from '../../Components/controllers';
import ImageViewAdmin from '../../Components/images/imageViewAdmin';
import './adminPage.css';

export default function AdminPage(){
  const [images, setImages] =useState();

  useEffect(() => {
    Images.getAll()
    .then(res => {
      setImages(res.data);
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return(
    <div className='admin-page'>
      <span className='title'>Images</span>
      <div className='d-flex flex-column align-items-center'>
        <ImageViewAdmin hasAddButton={true}/>
      </div>

    <span className='title-2'>Published images</span>
    <main className='grid-container'>
      {
        images?.map((img, index) => { return(
          <ImageViewAdmin image={img} key={index}/>
        )})
      }
    </main>
    </div>
  );
}