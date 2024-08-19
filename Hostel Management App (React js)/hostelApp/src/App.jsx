import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Desktop from "./pages/desktop/Desktop";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Header></Header>
      <Desktop></Desktop>
      <Footer></Footer>
    </>
  );
};

export default App;
