import './Menu.scss'
import coffe2 from '../../../assets/svg/coffe2.png'
import coffe3 from '../../../assets/svg/coffe3.png'
import coffe4 from '../../../assets/svg/coffe4.png'

const Menu = () => {
    return(
        <div className='menu'>
            <div className='category'>
                <div>
                    <p className='title'>Black Coffees</p>
                    <button>Order Now</button>
                </div>
                <div>
                    <img src={coffe2}/>
                    <p>Black coffee is simply coffeewith nothing added – no cream,
                    no milk, no sweetener. When you leave out those extra ingredients,
                    you leave out the calories, fat, and sugar that come with them.
                    hat allows you to enjoy the health benefits
                     of coffee without additives that aren’t as good for you. </p>
                </div>
            </div>

            <div className='category'>
                <div>
                    <img src={coffe3}/>
                    <p>So loved is coffee that it has been given a variety of affectionate nicknames.
                    Java, cup of joe, rocket fuel, bean juice, liquid energy, 
                    worm dirt, and jitter juice are just a few of the terms of endearment used to describe a hot cup of coffee.  
                    All of this coffee conversation causes the question to arise, why do so many people enjoy coffee so deeply?
                    Perhaps one of the reasons is because coffee simply makes us feel good. </p>
                </div>
                <div>
                    <p className='title'>Hot Coffees</p>
                    <button>Order Now</button>
                </div>
            </div>

            <div className='category'>
                <div>
                    <p className='title'>White Coffees</p>
                    <button>Order Now</button>
                </div>
                <div>
                    <img src={coffe4}/>
                    <p>White Coffee is coffee roasted half of the way through and to a lower temperature. 
                    By roasting it to this much lower temperature, 
                    you get a whitish colored bean that is higher in caffeine because you roast out less caffeine. 
                    This results in a very nutty and sweet taste profile much different from traditional coffee.</p>
                </div>
            </div>
            {/* some icon dicoration */}
            <div className="flow" id="cup1"></div>
            <div className="flow" id="cup2"></div>
            <div className="flow" id="cup3"></div>

            <div className="flow" id="bean1"></div>
            <div className="flow" id="bean2"></div>
            <div className="flow" id="bean3"></div>
            <div className="flow" id="bean4"></div>
            <div className="flow" id="bean5"></div>

            <div className="flow" id="bean6"></div>
            <div className="flow" id="bean7"></div>
            <div className="flow" id="bean8"></div>
            <div className="flow" id="bean9"></div>

            <div className="flow" id="mocha1"></div>
            <div className="flow" id="mocha2"></div>
            <div className="flow" id="mocha3"></div>
        </div>
    );
}
export default Menu