import './Branch.scss'
import branch1 from './../../../assets/svg/branch1.png'
import branch2 from './../../../assets/svg/branch2.png'
import branch3 from './../../../assets/svg/branch3.png'

const Branch = () =>{
    const branchs = [
        {
            img:branch1,
            branch: 'New York',
            description: 'Local specialty coffee and tea shop, featuring coffee from Saint Frank, matcha from Ippodo, as well as various baked goods and toasts. Our shop\'s goal, in addition to providing a respite for guests from the chaos of Times Square, is to provide job training for people with barriers to employment. We look forward to serving you.'
        },
        {
            img:branch2,
            branch: 'Jakarta',
            description: 'Jakarta\'s Best is for anyone who wants to know about the best places in Jakarta, without having to search for everything yourself.'
        },
        {
            img:branch3,
            branch: 'Paris',
            description: 'We are producers of enogastronomic experiences in Paris and France. We organize tours and tailor-made trips that celebrate the art of eating and drinking in France. We act as a receptive agency for independent travelers, travel agencies and corporations.'
        }
    ]
    return(
        <div className='branch'>
            <div>
                <p>Our Branchs</p>
            </div>
            <div className='branchs'>
                {
                    branchs.map((branch)=>{
                        return(
                            <div className='card'>
                                <img src={branch.img}/>
                                <span>{branch.branch}</span>
                                <p>{branch.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flow" id="cup"></div>
            <div className="flow" id="bean1"></div>
            <div className="flow" id="bean2"></div>
            <div className="flow" id="mocha"></div>
        </div>
    );
}
export default Branch