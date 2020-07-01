import React from "react";
import { BrowserRouter } from "react-router-dom";
import Auth from "./components/Auth/auth";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Auth />
		</BrowserRouter>
	);
}

export default App;
