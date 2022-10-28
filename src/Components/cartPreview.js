import './cartPreview.css';

export default function CartPreview(){
  return(
    <div className='cart-preview-container'>
      <div className='d-flex'>
        <img alt="" src={process.env.PUBLIC_URL + "/Images/szilvi-profile-web.jpg"}/>

        <div className='d-flex flex-column mx-4'>
          <span className='title'>Titlte of the photo</span>
          <span>Price: 10</span>
          <span>Number of exemplars: 1</span>
        </div>
      </div>

      <div className='actions'>
        <div style={{"backgroundColor": "green"}}>
          <img alt="" src={process.env.PUBLIC_URL + "/Images/add.png"}/>
        </div>

        <div style={{"backgroundColor": "grey"}}>
          <img alt="" src={process.env.PUBLIC_URL + "/Images/minus.png"}/>
        </div>

        <div style={{"backgroundColor": "red"}}>
          <img alt="" src={process.env.PUBLIC_URL + "/Images/cancel.png"}/>
        </div>
      </div>
    </div>
  )
}