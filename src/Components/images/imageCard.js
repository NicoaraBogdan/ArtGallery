import './imageCard.css'

export default function ImageCard({price, base64, tehnique, size, handleClick, adminView = false}){
    return(
        <div className="image-card-container">
            <img alt="" onClick={handleClick}  src={base64}/>
            <div className='text-container'>
                <span>Technique: {tehnique}</span>
                <span>Size: {size} CM</span>
                <div>
                  <span>Price: {price}$</span>
                  {!adminView && (
                    <button style={{marginLeft: '10px'}}>Add to cart</button>
                  )}
                </div>
            </div>
        </div>
    );
}
