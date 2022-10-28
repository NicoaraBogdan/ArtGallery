
import './gallery.css';
import { TopNavBar } from '../../Components/controllers';
import ImageCard from '../../Components/images/imageCard';
import ImageMagnifier from '../../Components/images/imageMagnifier';
import {useState, useEffect} from 'react';
import { Images } from '../../API';

export default function Gallery(){
  const [selectedImage, setSelectedImage] = useState();
  const [images, setImages] = useState(null);

  const handleMainPageScroll = () => {
    if(selectedImage){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "unset"
    }
  }

  useEffect(() => {
    handleMainPageScroll();
  }, [selectedImage])


  useEffect(() => {
    Images.getAll().then(res => {
      setImages(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return(
      <div className='gallery-page'>
        <TopNavBar/>
        {selectedImage && <ImageMagnifier close={() => setSelectedImage(null)} src={selectedImage}/>}

        <main>
          <section>
            {/* <span className='title'>  
              Section 1
            </span> */}
            <div className='image-container'>
              {images?.map(image => { return (
                <ImageCard 
                  tehnique={image.tehnique}
                  size={"70x50"}
                  base64={image.imgBase64}
                  price={image.price}/>
              )})}
            </div>
          </section>
        </main>
      </div>
  );
}