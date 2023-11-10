import './Navbar.scss'
import logo from '../../assets/svg/logo.svg'
const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="menu">
                <span>Home</span>
                <span>About</span>
                <span>Menu</span>
                <span>Blog</span>
                <span>Shop</span>
                <span>Contact</span>
            </div>
            <div className="logo"><img src={logo}/></div>
        </div>
    );
}
export default Navbar