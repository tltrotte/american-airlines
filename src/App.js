import React, { Component } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import "./App.css";

class App extends Component {
	state = {
		results: [],
		error: undefined
	};

	getFlightResults = async e => {
		const origin = e.target.elements.origin.value;
		const destination = e.target.elements.destination.value;
		e.preventDefault();
		const flightengine_call = await fetch(
			`https://american-flight-engine-2019.herokuapp.com/flights?date=2019-11-26&origin=${origin}&destination=${destination}`
		);
		const flightdata = await flightengine_call.json();
		console.log(flightdata);
		this.setState({
			results: flightdata
		});
	};
	render() {
		return (
			<div>
				<p>Hello</p>
				<Results results={this.state.results} error={this.state.erorr} />
				<Form getFlightResults={this.getFlightResults} />
			</div>
		);
	}
}

export default App;
