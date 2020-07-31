import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Auth from "./components/Auth/auth";
import Layout from "./components/Layout/Layout";
import "roboto-fontface";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Auth} />
      <Route path="/auth" component={Auth} />
      <Route path="/layout" component={Layout} />
    </BrowserRouter>
  );
}

export default App;
