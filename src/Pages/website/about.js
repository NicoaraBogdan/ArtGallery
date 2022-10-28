import { TopNavBar } from '../../Components/controllers';
import { useRef, useState } from 'react';
import './about.css';

export default function AboutPage(){
  const [imgWidth, setImgWidth] = useState(0);

  const textUpRef = useRef();

  const handleLoad = e => {
    const imgRef = e.target;

    setImgWidth(imgRef.width);
  }

  return(
    <main className='about-page'>
      <TopNavBar/>
      <section>
        <img 
          onLoad={e => handleLoad(e)}
          src={process.env.PUBLIC_URL + "/Images/szilvi-profile-web.jpg"} 
          alt=""/>
          
        <div className='title-container'>
          <span ref={textUpRef} className='text-up'>
            My nickname is 
          </span>
          <span className='text-down'>
            <strong>Syzy</strong>
          </span>
        </div>

        <div className='about-me-text'>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis illo eligendi totam repudiandae reprehenderit accusantium sunt cupiditate animi vitae voluptates ratione et facere dolorem, sit exercitationem dignissimos. Minima qui dolor optio quia, voluptatum placeat corporis perferendis, laborum fuga alias dolorem delectus animi? Dignissimos iste veritatis magnam, sint sequi, tenetur nisi dolores recusandae sed ullam, iure est vitae repellat accusamus illum neque temporibus quibusdam laboriosam magni error distinctio obcaecati iusto officia? Mollitia ad odio quia vel animi, dolorem laborum ipsa aliquid facilis! Suscipit nemo et, dolore facilis ratione nostrum aut excepturi iste explicabo sed sapiente at, saepe modi eaque ipsam nihil rerum! Sequi suscipit, et distinctio iure sit omnis dicta nemo sint ipsa aut repellat debitis, fugit inventore! Modi veniam aut cum. Porro, repellendus quia animi sint sequi quisquam, fugit ut debitis hic corrupti molestias nisi id laudantium non quidem ipsa ullam provident culpa harum soluta. Repellendus officiis, incidunt deleniti molestiae molestias vitae tenetur ipsum sunt corrupti, quidem, fugiat eligendi aperiam autem ab expedita cupiditate consectetur natus repudiandae modi vel maiores accusamus similique laboriosam. Sapiente, iusto. Odio nihil incidunt, laudantium adipisci perferendis, alias ducimus atque laboriosam, natus similique consequatur reprehenderit praesentium ratione dolor dolore tenetur. Sapiente voluptatibus autem eaque ipsam.
          </span>
        </div>
      </section>
    </main>
  );
}