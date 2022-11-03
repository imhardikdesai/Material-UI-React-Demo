import NavBar from "./components/NavBar/NavBar";
import HeroCard from "./components/Hero/HeroCard";
import Footer from "./components/Footer/Footer";
import logo from './Assets/Avatar.png';
import dish from './Assets/foodDish.jpg';

function App() {
  return (
    <div className="App">
      <NavBar logo={logo} />

      <div style={{ margin: "20px auto" }} className="row container">
        <HeroCard avatar={logo} logo={dish} />
        <HeroCard avatar={logo} logo={dish} />
        <HeroCard avatar={logo} logo={dish} />
        <HeroCard avatar={logo} logo={dish} />
        <HeroCard avatar={logo} logo={dish} />
        <HeroCard avatar={logo} logo={dish} />
      </div>

      <div className="container-fluid">
        <Footer />
      </div>
    </div>
  );
}

export default App;
