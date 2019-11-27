import React, { Component } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import "./App.css";

class App extends Component {
	state = {
		flightResults: [],

		error: undefined
	};

	getFlightResults = async e => {
		const orgin = e.target.elements.orgin.value;
		const destination = e.target.elements.destination.value;
		e.preventDefault();
		const flightengine_call = await fetch(
			`https://american-flight-engine-2019.herokuapp.com/flights?date=2019-11-26&origin=${orgin}&destination=${destination}`
		);
		const flightdata = await flightengine_call.json();
		console.log(flightdata);
		this.setState({
			flightResults: []
		});
		let flightResultsList = [];
		for (let i = 0; i < flightdata.length; i++) {
			let resultsObject = {};
			resultsObject.flightNumber = flightdata[i].flightNumber;
			console.log(resultsObject.flightNumber);
			resultsObject.orginCity = flightdata[i].orgin.city;
			console.log(resultsObject.orginCity);
			// resultsObject.orgincode = flightdata[i].orgin.code;
			// resultsObject.destinationCity = flightdata[i].destination.city;
			// resultsObject.destinationcode = flightdata[i].destination.code;
			flightResultsList.push(resultsObject);
		}

		if (orgin && destination) {
			this.setState({
				flightResults: flightResultsList,
				error: ""
			});
		} else {
			this.setState({
				error: "Please check input"
			});
		}
	};
	render() {
		return (
			<div>
				<Form getFlightResults={this.getFlightResults} />

				<Results
					flightResults={this.state.flightResults}
					// model={this.state.model}
					// flightNumber={this.state.flightNumber}
					// locale={this.state.locale}
					// orginCode={this.state.orginCode}
					// orginCity={this.state.orginCity}
					// destinationCode={this.state.destinationCode}
					// destinationCity={this.state.destinationCity}
					// distance={this.state.distance}
					// error={this.state.error}
				/>
			</div>
		);
	}
}

export default App;
