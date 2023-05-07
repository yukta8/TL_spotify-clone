import spotify from '../images/spotify.png'
import '../css/Navbar.css'
const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo">
            <img src={spotify} alt="Spotify" className="spotify" />
          </div>
          <div className="nav">
            <div className="links">Premium</div>
            <div className="links">Support</div>
            <div className="links">Download</div>
            <div>|</div>
            <div className="links">Sign up</div>
            <div className="links">Log in</div>
            </div>

      </nav>
    );
  }
   
  export default Navbar;