import Header from "./Components/Header"
import Instructions from "./Components/Instructions"
import AppleMusicLogin from "./Components/AppleMusic/AppleMusicLogin"
import SpotifyCardLogin from "./Components/Spotify/SpotifyCardLogin"
import YoutubeMusicLogin from "./Components/Youtube/YoutubeMusicLogin"
import CardsHolder from "./Components/CardsHolder"


let spotifyLoginBoolean = true;
let appleMusicLoginBoolean = true;
let youtubeMusicLoginBoolean = true;

function App(){
  return (
  <>
    <Header></Header>
    <Instructions></Instructions>
    <CardsHolder>
      {spotifyLoginBoolean && <SpotifyCardLogin></SpotifyCardLogin>}
      {appleMusicLoginBoolean && <AppleMusicLogin></AppleMusicLogin>}
      {youtubeMusicLoginBoolean && <YoutubeMusicLogin></YoutubeMusicLogin>}
    </CardsHolder>
  </>
  )
}

export default App
