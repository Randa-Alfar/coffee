import "./Landing.scss"
import cup from '../../../assets/svg/coffeecup.svg'
import bean from '../../../assets/svg/bean.svg'
import mocha from '../../../assets/svg/mocha.svg'
const Landing = () =>{
    return(
        <div className="landing">
            <div>
                <p>Coffe Time</p>
                <p>A Hot Cup of Happiness</p>
                <p>We make the mornings better. We make the nights longer.
                Good coffee is like friendship: rich, and warm and strong. 
                Great ideas come from great coffee. Given enough coffee, I could rule the world.
                </p>
                
                <button id="coffe-btn">Order Now</button>
            </div>
            <div className="flow" id="cup"><img src={cup}/></div>
            <div className="flow" id="bean"><img src={bean}/></div>
            <div className="flow" id="mocha"><img src={mocha}/></div>
            
        </div>
    );
}
export default Landing