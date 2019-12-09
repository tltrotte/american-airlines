import React, { Component } from "react";
import { Button } from "reactstrap";
import Results from "./Results";
import DatePicker from "react-datepicker";

const initialState = {
	results: [],
	origin: "",
	destination: "",
	travelDate: "",
	originError: "",
	destinationError: "",
	travelDateError: ""
};

class Form extends Component {
	state = initialState;

	handleChange = e => {
		console.log(e.target.destination);
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	verifyAlpha(e) {
		const re = /[a-fA-F]+/g;
		if (!re.test(e.key)) {
			e.preventDefault();
		}
	}
	getFlightResults = async e => {
		const origin = this.state.origin;
		const destination = this.state.destination;
		const travelDate = this.state.travelDate;
		const flightengine_call = await fetch(
			// `https://american-flight-engine-2019.herokuapp.com/flights?date=${travelDate}&origin=${origin}&destination=${destination}`
			`http://localhost:8000/flights?originCity=${origin}&destinationCity=${destination}&departureDate=${travelDate}`
			// `http://localhost:8000/flights?originCity=New York City&destinationCity=Chicago&departureDate=2019-12-14`
		);
		//Parsing to JSON
		const flightdata = await flightengine_call.json();
		console.log(flightdata);
		//TODO "results" state is not updating - API is being called
		this.setState({ results: flightdata });
	};

	validate = () => {
		let originError = "";
		let destinationError = "";
		let travelDateError = "";

		if (!this.state.origin) {
			originError = "Origin cannot be blank";
		}
		if (!this.state.destination) {
			destinationError = "Destination cannot be blank";
		}
		if (!this.state.travelDate) {
			travelDateError = "Travel Date cannot be blank";
		}
		if (originError || destinationError || travelDateError) {
			this.setState({ originError, destinationError, travelDateError });
			return false;
		}
		return true;
	};
	handleSubmit = e => {
		e.preventDefault();

		const isValid = this.validate();

		if (isValid) {
			this.getFlightResults();
			console.log(this.state);
			// clear form
			this.setState(initialState);
		}
	};
	render() {
		return (
			<div>
				<center>
					{/* Form handled once submit button is pressed and props available for main App */}
					<form onSubmit={this.handleSubmit}>
						<h4>Flight Tracker</h4>
						<div className='form-group'>
							<input
								type='text'
								name='origin'
								value={this.state.origin}
								placeholder='Origin City'
								onChange={this.handleChange}
								onKeyPress={e => this.verifyAlpha(e)}
							/>
							<div className='validationError'>{this.state.originError}</div>
							<input
								type='text'
								name='destination'
								value={this.state.destination}
								placeholder='Destination City'
								onChange={this.handleChange}
								onKeyPress={e => this.verifyAlpha(e)}
							/>
							<div className='validationError'>
								{this.state.destinationError}
							</div>
							{/* TODO format YYYY/MM/DD as well as maxLength */}
							<input
								type='date'
								name='travelDate'
								value={this.state.travelDate}
								placeholder='YYYY/MM/DD'
								onChange={this.handleChange}
							/>
						</div>
						<div className='validationError'>{this.state.travelDateError}</div>

						<Button color='primary'> Search </Button>
					</form>
				</center>
				<Results results={this.state.results} />
			</div>
		);
	}
}

export default Form;
