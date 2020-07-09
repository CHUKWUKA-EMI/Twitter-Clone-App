import React from "react";
import { BrowserRouter } from "react-router-dom";
import Auth from "./components/Auth/auth";
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Auth /> */}
      <Layout />
    </BrowserRouter>
  );
}

export default App;
