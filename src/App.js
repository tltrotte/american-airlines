import React, { Component } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import "./App.css";

class App extends Component {
	state = {
		results: [],

		error: undefined
	};
	componentDidMount() {
		const origin = "lax";
		const destination = "dfw";
		// const origin = e.target.elements.orgin.value;
		// const destination = e.target.elements.destination.value;
		// e.preventDefault();
		fetch(
			`https://american-flight-engine-2019.herokuapp.com/flights?date=2019-11-26&origin=${origin}&destination=${destination}`
		)
			.then(res => res.json())
			.then(flightdata => {
				this.setState({ results: flightdata });
				// let flightResultsList = [];
				// for (let i = 0; i < flightdata.length; i++) {
				// 	let resultsObject = {};
				// 	resultsObject.flightNumber = flightdata[i].flightNumber;
				// 	console.log(resultsObject.flightNumber);
				// 	console.log("Orgin City", flightdata[i].orgin.city);
				// }
				console.log("Print flight number:", flightdata);
			})
			.catch(console.log);
	}
	// getFlightResults = async e => {
	// 	const orgin = e.target.elements.orgin.value;
	// 	const destination = e.target.elements.destination.value;
	// 	e.preventDefault();
	// const flightengine_call = await fetch(
	// 	`https://american-flight-engine-2019.herokuapp.com/flights?date=2019-11-26&origin=${orgin}&destination=${destination}`
	// );
	// const flightdata = await flightengine_call.json();
	// console.log(flightdata);
	// this.setState({
	// 	flightResults: []
	// });
	// let flightResultsList = [];
	// for (let i = 0; i < flightdata.length; i++) {
	// 	let resultsObject = {};
	// 	resultsObject.flightNumber = flightdata[i].flightNumber;
	// 	console.log(resultsObject.flightNumber);
	// 	resultsObject.orginCity = flightdata[i].orgin.city;
	// 	console.log(resultsObject.orginCity);
	// 	resultsObject.orgincode = flightdata[i].orgin.code;
	// 	resultsObject.destinationCity = flightdata[i].destination.city;
	// 	resultsObject.destinationcode = flightdata[i].destination.code;
	// 	flightResultsList.push(resultsObject);
	// }

	// 	if (orgin && destination) {
	// 		this.setState({
	// 			flightResults: flightResultsList,
	// 			error: ""
	// 		});
	// 	} else {
	// 		this.setState({
	// 			error: "Please check input"
	// 		});
	// 	}
	// };
	render() {
		return (
			<div>
				<p>Hello</p>
				<Results results={this.state.results} />
				<Form getFlightResults={this.getFlightResults} />
			</div>
		);
	}
}

export default App;
