import searchIcon from "../assets/magnifying-glass.svg";
import homeIcon from "../assets/house.svg";
import movieIcon from "../assets/film-slate.svg";
import monitorIcon from "../assets/monitor.svg";
import plusIcon from "../assets/plus.svg";
import trendupIcon from "../assets/trend-up.svg";
import aadTitle from "../assets/hunter_x_letters_transparent2.png";
import'./home.css';
import MovieCard from "../components/MovieCard";

function Home() {
  return (
   <div className="netflix">
    <div className="sidebar">
     <img src={searchIcon} alt="searchIcon" />
     <img src={homeIcon} alt="homeIcon" />
     <img src={movieIcon} alt="movieIcon" />
     <img src={monitorIcon} alt="monitorIcon" />
     <img src={plusIcon} alt="plusIcon" />
    <img src={trendupIcon} alt="trendupIcon" />
    </div>
    <div className="home-main">
      <div className="hero">
          <img src={aadTitle} alt="" />
          <p>Rating : 6/10</p>
          <p>2M Streams</p>
          <div className="hero-button">
            <button className="playbutton">Play</button>
            <button className="trailerbutton">Watch Trailer</button>
          </div>
      </div>
    <MovieCard Mtitle="New This Week"/>
    <MovieCard Mtitle="movies"/>
    <MovieCard Mtitle="ova"/>
    <MovieCard Mtitle="special"/>
  </div>
  </div>
  )
  }

export default Home