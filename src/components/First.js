import '../css/First.css';
import phone from '../images/phone.jpeg'
const First = () => {
    return ( 
        <div className="firstPage">
      
        <div className="firstContent">
        
          <div className="phoneBg">
            <div className="phone">
              
              <img src={phone} className="phoneIn" alt="phone" />
            </div>
          </div>
       
        <div className="navContent">
          <div className="text1">
            Play millions of songs and podcasts, for free.
            <button className="text2">GET SPOTIFY FREE</button>
          </div>
        </div>
        </div>
        </div>
        
     );
}
 
export default First;