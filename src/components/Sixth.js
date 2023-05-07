import spotify from '../images/spotify.png'
import '../css/Sixth.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Sixth = () => {
    return ( 
        <>
      <div className="sixthPage">
        <div className="sixthContent">
            <div className='upper'>
          <div className="sixthTable">
            <div className="sixthLogo">
            <img src={spotify} alt="Spotify" className="sixthspotify" />
            </div>
            <table>
              <thead>
                <tr>
                  <th>COMPANY</th>
                  <th>COMMUNITIES</th>
                  <th>USEFUL LINKS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>About</td>
                  <td>For Artists</td>
                  <td>Support</td>
                </tr>
                <tr>
                  <td>Jobs</td>
                  <td>Developers</td>
                  <td>Web Player</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Investors</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>Vendors</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>Spotify for Work</td>
                  <td></td>
                </tr>
                
              </tbody>
            </table>
            </div>
             <div className="sixthSocials">
              <div className="social">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="social">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="social">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              </div>
          </div>
          <div className="lower">
            <div className="sixthFooter">
              <div className="footer">Legal</div>
              <div className="footer">Privacy Center</div>
              <div className="footer">Privacy Policy</div>
              <div className="footer">Cookies</div>
              <div className="footer">About Ads</div>
            </div>
            </div>
          
         
         
       </div>
       </div>
    </>
     );
}
 
export default Sixth;