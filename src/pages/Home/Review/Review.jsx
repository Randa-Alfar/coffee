import './Review.scss'
import review1 from './../../../assets/svg/review1.png'
import review2 from './../../../assets/svg/review2.png'

const Review = () => {
    const reviews = [
        {
            img: review1,
            name: 'John Peter',
            review:'I like this coffee it\'s really smooth and has an after taste of chocolate. Service was brilliant and the coffee was delivered the day after I ordered it and was ground perfectly for the Cafetiere.',
        },
        {
            img: review2,
            name: 'Ella Thomson',
            review: 'Brought some Kopi Luwak to enjoy on Christmas day. Didn\'t order until late but even with the standard postage the coffee arrived in time great service. The coffee went down a treat and I\'m just about to order some more thank you the love of coffee'
        }
    ]
    return(
        <div className='review'>
            <div className='title'>
                <p>Custmer Reviews</p>
            </div>
            <div className='reviews-container'>
                {
                    reviews.map((review)=>{
                        return(
                        <div className='card'>
                            <img src={review.img}/>
                            <p>{review.name}</p>
                            <p>{review.review}</p>
                        </div>)
                    })
                }
            </div>
            <div className="flow" id="cup"></div>
            <div className="flow" id="bean"></div>
            <div className="flow" id="mocha"></div>
        </div>
    );
} 
export default Review