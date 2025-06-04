import React from "react";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import FAQ from "./components/FAQ";
// import Home from "./components/Home"
import HelpCenter from './components/HelpCenter'
import Player from "./components/Player";
// import HomeNavbar from "./components/HomeNavbar";
import MyList from "./components/MyList";


// // const Home = () => <h1>Home Page</h1>;
// const About = () => <h1>About Page</h1>;
// const Services = () => <h1>Services Page</h1>;
// const Movies = () => <h1>Movies Page</h1>;
// const Contact = () => <h1>Contact Page</h1>;

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/player" element={<Player />} />
        
      </Routes>
    </Router>
  );
// return(
//    <LoginPage />
  // <FAQ />
  // <HelpCenter />
  // <Player />
  // <MyList />
  // <Footer />
  // <Home/>
  // <HomeNavbar />
// );
}

export default App;