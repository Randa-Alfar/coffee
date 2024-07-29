import './Navbar.scss'
import logo from '../../assets/svg/logo.svg'
import { Link } from 'react-router-dom';
const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="menu">
                <span>Home</span>
                <span>About</span>
                <span><Link to="menu-management/menu">Menu</Link></span>
                <span>Blog</span>
                <span>Shop</span>
                <span>Contact</span>
            </div>
            <div className='login'>
                <span><Link to="login">Log in</Link></span>
                <span><Link to="signup">Sign up</Link></span>
            </div>
            <div className="logo"><img src={logo}/></div>
        </div>
    );
}
export default Navbar