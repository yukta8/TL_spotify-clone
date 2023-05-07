
import "../css/Second.css"

const Second = () => {
    return ( 
        <>
      <div className="secondPage">
        <div className="secondContent">
          <div className="heading">Why Spotify?</div>
          
            <div className="logos">
              <div className="logoDiv">
                <img className="logo" src='https://i.scdn.co/image/ab671c3d0000f430678067184805befd38aa0f57' alt="" />
                <div className="logoTitle">Play Your Favorites.</div>
                <div className="logoText">
                  Listen to the songs you love, and discover new music and
                  podcasts.
                </div>
              </div>
              <div className="logoDiv">
                <img className="logo" src='https://i.scdn.co/image/ab671c3d0000f430a6f822749d5c25c32ee31d66' alt="" />
                <div className="logoTitle">Playlists made easy.</div>
                <div className="logoText">
                  We'll help you make playlists. Or enjoy playlists made by
                  music experts.
                </div>
              </div>
              <div className="logoDiv">
                <img className="logo" src='https://i.scdn.co/image/ab671c3d0000f430eb43023b5332389f5094530d' alt="" />
                <div className="logoTitle">Make it yours.</div>
                <div className="logoText">
                  Tell us what you like, and we'll recommend music for you.
                </div>
              </div>
              <div className="logoDiv">
                <img className="logo" src='https://i.scdn.co/image/ab671c3d0000f4309430062bc28461dc8fbde6bc' alt="" />
                <div className="logoTitle">Save mobile data.</div>
                <div className="logoText">
                  To use less data when you play music, turn on Data Saver in
                  Settings.
                </div>
              </div>
            </div>
         
          
        </div>
      </div>
    </>
     );
}
 
export default Second;