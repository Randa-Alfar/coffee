import './Voucher.scss'
import voucher from './../../../assets/svg/voucher.png'
const Voucher = () =>{
    return(
        <div className='voucher'>
            <p>Voucher</p>
            <img src={voucher}/>
            <button>Get Voucher Now</button>
            
            <div className="flow" id="cup"></div>
            <div className="flow" id="bean"></div>
            <div className="flow" id="mocha"></div>
        </div>
    );
}
export default Voucher