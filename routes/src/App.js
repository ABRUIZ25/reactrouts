import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </header>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>

    </div>
  )
}


const About = (props) => {
  return (
    <div>
      <Navbar />
      <h1>About Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac eros efficitur, dignissim felis a, vehicula tellus.</p>


    </div>
  )
}

export default App;
