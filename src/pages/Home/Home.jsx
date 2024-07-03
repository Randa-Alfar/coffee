import Landing from './Landing/Landing'
import Menu from './Menu/Menu'
import Voucher from './Voucher/Voucher'
import Review from './Review/Review'
import Open from './Open/Open'
import Branch from './Branch/Branch'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Home.scss'
const Home = () =>{
    return(
        <>
        <Navbar/>
            <div className='home'>
                <Landing/>
                <Menu/>
                <Voucher/>
                <Review/>
                <Open/>
                <Branch/>
            </div>
        <Footer/>
        </>
    
    );
}
export default Home