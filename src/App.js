import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/layout/Header";
import AllContent from "./components/layout/AllContent";
import Sidebar from "./components/layout/Sidebar";
// import Installation from "./components/layout/Installation";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Feature from "./pages/Feature";

function App() {
  return (
    <main>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/feature" element={<Feature />}>
          </Route>
        </Routes>
      </BrowserRouter> */}
      <div className="wrapper">
        <Sidebar />
        <AllContent />
      </div>
    </main>
  );
}

export default App;
