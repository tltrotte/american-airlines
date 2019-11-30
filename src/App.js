import React, { Component } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import "./App.css";
import Logo2 from "./Logo2.png";

class App extends Component {
	//Initial State of Flight Results
	state = {
		results: [],
		error: undefined
	};

	//Function to send GET request to API using the event handled on Form submission
	getFlightResults = async e => {
		const origin = e.target.elements.origin.value;
		const destination = e.target.elements.destination.value;
		const travelDate = e.target.elements.travelDate.value;
		e.preventDefault();
		//API Get request
		const flightengine_call = await fetch(
			`https://american-flight-engine-2019.herokuapp.com/flights?date=${travelDate}&origin=${origin}&destination=${destination}`
		);
		//Paring to JSON
		const flightdata = await flightengine_call.json();
		console.log(flightdata);
		//Updating State
		if (origin && destination) {
			this.setState({
				results: flightdata,
				error: ""
			});
		} else {
			this.setState({
				results: undefined,
				error: "No Results Found"
			});
		}
	};
	render() {
		return (
			<div>
				<center>
					<div className='header'>
						<h1>
							<img src={Logo2} alt='website logo' />
						</h1>
					</div>
				</center>
				<Form getFlightResults={this.getFlightResults} />
				<Results results={this.state.results} error={this.state.erorr} />
			</div>
		);
	}
}

export default App;
