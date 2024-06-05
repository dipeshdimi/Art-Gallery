import './App.css';
import Logo from './components/LogoTile';
import Navbar from './components/NavBarTile';
import SearchBar from './components/SearchFilterTile';
import Posts from './components/ArtistPostTile';
import Button from './components/BecomeSellerTile';
import Artists from './components/ArtistsPhotographersTile'

function App() {
  return (
    <div className="container">
      <div className="column">
        <Logo/>
        <Navbar/>
      </div>

      <div className="column">
        <SearchBar/>
        <Posts/>
      </div>

      <div className="column">
        <Button/>
        <Artists/>
      </div>
    </div>
  );
}

export default App;
