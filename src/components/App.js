import React from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Sort from "./Sort";
import CardDisplay from "./CardDisplay";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Filter />
			<Sort />
			<CardDisplay />
		</div>
	);
}

export default App;
