import { useEffect, useState } from "react";
// import Navbar from "./Components/Navbar";
// import Carousel from "./Components/Carousel";
// import Card from "./Components/Card";
// import Footer from "./Components/Footer";
// import Signup from "./Components/Signup";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Login from "./Components/Login";
// import Accordion from "./Components/Accordion";
// import Modal from "./Components/Modal";
// import ItemTable from "./Components/ItemTable";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} /> 
          {/* <Route path="/" element={<ItemTable />} />
          <Route path="/" element={<Modal />} />
          <Route path="/" element={<Accordion />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/login" element={<Login />} /> */}

        </Routes>
      </Router>
    </>
  );
}

export default App;
