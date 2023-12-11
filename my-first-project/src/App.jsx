import ironhackLogo from "./assets/ironhack-logo-xs.png";
import menuTop from "./assets/menu-top-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="main-page">
          <div className="navbar">
            <img src={ironhackLogo} alt="Ironhack logo" />
            <img src={menuTop} alt="Menu" />
          </div>
          <h1 id="title">Say hello to ReactJS</h1>
          <p id="sub-heading">
            You will learn how to use <br></br>the most popular frontend
            library,<br></br> and become a super Ninja developer.
          </p>
          <button id="btn-main-page">Awesome!</button>
        </div>
        <div id="section">
          <div className="element">
            <img src={icon1} alt="icon 1" />
            <h3>Declartion</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="element">
            <img src={icon2} alt="icon 2" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their stage.</p>
          </div>
          <div className="element">
            <img src={icon3} alt="icon 3" />
            <h3>Single-Way</h3>
            <p>A set fo immutable values are passed to the component's.</p>
          </div>
          <div className="element">
            <img src={icon4} alt="icon 4" />
            <h3>JSX</h3>
            <p>Statically-typed designed to run an modern browsers.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
