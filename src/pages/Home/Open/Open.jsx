import './Open.scss'

const Open = () =>{
    const times =[
        {
            days:'Monday - Friday',
            time:'10:00 am - 10:00 pm'
        },
        {
            days: 'Saturday - Sunday',
            time:'10:00 am - 10:10 pm'
        }
    ]
    return(
        <div className='open'>
            <div>
                <p>We are Open</p>
            </div>
            <div>
            {
                times.map((date)=>{
                    return(
                        <div className="date">
                            <span>{date.days}</span>
                            <span>{date.time}</span>
                        </div>
                    );
                })
            }
            </div>
            
        </div>
    );
}
export default Open