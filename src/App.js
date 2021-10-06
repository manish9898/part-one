import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Specail from "./Specail";
import List from "./List";
import CardComp from "./CardComp";
// import Cards from "./Cards";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <List />
      <CardComp />
      {/* <Cards /> */}
    </>
  );
}

export default App;
