import {Route, Link, Routes} from "react-router-dom"
import Home from "./home/Home";
import Articles from "./articles/Articles";
import Login, {ProtectedRoute} from "./login/Login";
import logo1 from "./assets/images/Logo1.png"
import loupe from "./assets/images/loupe.png"
import './App.css';

function App() {
  return (
    <>
    <nav>
      <img src={logo1}></img>
      <a>SwiMag</a>
      <img src={loupe}></img>
      <div class="trait">

        <div></div>
        <div></div>
        <div></div>

      </div>


    </nav>
      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/articles" element={<Articles/>}/>
        <Route exact={true} path="/login" element={<Login/>}/>
        <Route path="*" element={() => <p>Page Not Found</p>} />
      </Routes>
    </>
);
}

export default App;
