import { Route, Link, Routes } from "react-router-dom"
import Home from "./home/Home";
import Articles from "./articles/Articles";
import Footer from "./footer/Footer";
import Login, { ProtectedRoute } from "./login/Login";
import Register from "./register/Register";
import Search from "./Search";
import AddArticle from "./addArticle";
import './App.css';

import logo from './images/Logo.png'
import loupe from './images/Loupe_noir.png'
import menu from './images/menu.png'
import cross from './images/cross.png'
import co from './images/co.png'

function App() {
  return (
    <>

      <header className="header container" id="main-header">

        <div className="div_logo">
          <Link className="flex_logo" to="/"> <img className="img_logo" src={logo} alt="Logo" /> <span className="nom_logo">SwiMag</span></Link>
          <Link className="nav-link" to={"/search"}> <img className="img_loupe" src={loupe} alt="Loupe" /> </Link>
        </div>

        <div className="header-toogle">
          <a href="#main-header" className="header-toogle-open"><img src={menu} width="30" alt="Ouvrir Menu" /></a>
          <a href="#" className="header-toogle-close"><img src={cross} width="30" alt="Fermer Menu" /></a>
        </div>

        <nav className="header-menu">
          <div className="log_regi">
            <Link className="nav-link" to={"/addArticle"}>Add Articles </Link> <span>/</span>
            <Link className="nav-link" to={"/login"}>Login </Link> <span>/</span>
            <Link className="nav-link" to={"/register"}>Register</Link> <img src={co} alt="" />
          </div>

          <span className="haut_titre_cat">Categories : </span>
          <Link className="haut_gras" to="/articles">News</Link>
          <span className="haut_trait"></span>

          <Link className="haut_gras" to="/">How to swim ?</Link>
          <Link className="haut_cat" to="/">discover our tips for better swimming</Link>
          <span className="haut_trait"></span>

          <Link className="haut_gras" to="/">Comptetitions</Link>
          <Link className="haut_cat" to="/">World records</Link>
          <Link className="haut_cat" to="/">Athlets</Link>
          <span className="haut_trait"></span>

          <Link className="haut_gras" to="/">Awards</Link>
          <Link className="haut_cat" to="/">Best men swimming</Link>
          <Link className="haut_cat" to="/">Best women swimming</Link>
        </nav>

      </header>

      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/articles" element={<Articles />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route exact={true} path="/register" element={<Register />} />
        <Route exact={true} path="/search" element={<Search />} />
        <Route exact={true} path="/addArticle" element={<AddArticle/>}/>
        <Route path="*" element={() => <p>Page Not Found</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;