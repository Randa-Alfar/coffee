import './Footer.scss'
import logo from '../../assets/svg/logo.svg'
import f from '../../assets/svg/facebook.svg'
import i from '../../assets/svg/Instagram.svg'
import t from '../../assets/svg/Twitter.svg'
import y from '../../assets/svg/YouTube.svg'
const Footer = () =>{
    return(
        <div className='footer'>
            <div className='footer-content'>
                <div><img src={logo}/></div>
                <div>
                    <span>Information</span>
                    <div>
                        <span>About us</span>
                        <span>Branches</span>
                        <span>Menu</span>
                        <span>Contact</span>
                        <span>Map</span>
                    </div>
                </div>

                <div>
                    <span>Conatct Us</span>
                    <div>
                    <span>Support</span>
                    <span>randa.chiri@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className='footer-nav'>
                <div>
                    <span>Home</span>
                    <span>About</span>
                    <span>Menu</span>
                    <span>Blog</span>
                    <span>Shop</span>
                    <span>Contact</span>
                </div>
                <div>
                    <img src={f}/>
                    <img src={i}/>
                    <img src={t}/>
                    <img src={y}/>
                </div>
            </div>
        </div>
    );
}
export default Footer