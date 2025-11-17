import React from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Sort from "./Sort";
import CardDisplay from "./CardDisplay";

import { v4 as uuidv4 } from "uuid";
import hogs from "../porkers_data";

const hogsWithId = hogs.map((hog) => {
	return{
    ...hog,
    id: uuidv4()
    }
  });

function App() {
	return (
		<div className="App">
			<Nav />
			<Filter />
			<Sort />
			<CardDisplay hogs={hogsWithId}/>
		</div>
	);
}

export default App;
