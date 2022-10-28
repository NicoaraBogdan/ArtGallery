import './InformationalForm.css'

export default function InformationalForm(){
    return(
        <div className='informational-form'>
            <div className='title-container'>
                <span className='title'>Buying proccess completed</span>
                <span className='subtitle'>You have successfuly bought a great pice of art</span>
            </div>

            <div className='info-text'>
                <img src={process.env.PUBLIC_URL + '/Images/correct.png'}/>
                <span>Your order has been registered. We will prepare the product 
                    for shippment and we will let you know when that package will be shippetw </span>
            </div>

            <div style={{'marginBottom' : '10px'}}>
                <span>If you have question any question you can send an email at&nbsp;
                    <span style={{'color': 'blue', 'textDecoration' : 'underline'}}>
                        seriousdevelopers22@gmail.com
                    </span>
                </span>
            </div>
        </div>
    );
}