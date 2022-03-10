import {Route, Link, Routes} from "react-router-dom"
import Home from "./home/Home";
import Articles from "./articles/Articles";
import Footer from "./footer/Footer";
import Login, {ProtectedRoute} from "./Login";
import Register from "./Register";
import Search from "./Search";
import './App.css';

function App() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/articles">News</Link>
      <Link className="nav-link" to={"/login"}>Login </Link>
      <Link className="nav-link" to={"/register"}>Register</Link>
      <Link className="nav-link" to={"/search"}>Search</Link>
    </nav>
      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/articles" element={<Articles/>}/>
        <Route exact={true} path="/login" element={<Login/>}/>
        <Route exact={true} path="/register" element={<Register/>}/>
        <Route exact={true} path="/search" element={<Search/>}/>
        <Route path="*" element={() => <p>Page Not Found</p>} />
      </Routes>
      <Footer />
    </>
);
}

export default App;
