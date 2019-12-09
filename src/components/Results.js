import React, { Component } from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import Form from "./Form";

// class Results extends Component {

// 	render() {
// 		return (
// 			<div>
// 				<p>Hello World</p>
// 			</div>
// 		);
// 	}
// }

const Results = ({ results }) => {
	return (
		<div>
			<center>
				{/* TODO Map results for custom API */}
				{/* {results.flights.map(results => (
					<Card
						className='cards'
						body
						inverse
						style={{ backgroundColor: "#333", borderColor: "#333" }}
						body
						outline
						color='primary'
					>
						<CardTitle>
							<h4>Flight Number {results.flights.aircraftModel}</h4>
						</CardTitle>
						<CardText>
							<h5>
						
						Departs from {results.origin.city} ({results.origin.code}) to
							</h5>
							<h5></h5>
							Approximate flight duration:
						</CardText>
					</Card>
				))}
				; */}

				{/* complete mapping for given API */}
				{/* // .map function looping throuhg each array and grabbing specified item */}
				{/* {results.map(results => (
					<Card
						className='cards'
						body
						inverse
						style={{ backgroundColor: "#333", borderColor: "#333" }}
						body
						outline
						color='primary'
					>
						<CardTitle>
							<h4>Flight Number #{results.flightNumber}</h4>
						</CardTitle>
						<CardText>
							<h5>
								Departs from {results.origin.city} ({results.origin.code}) to
							</h5>{" "}
							<h5>
								{results.destination.city} ({results.destination.code})
							</h5>
							Approximate flight duration:
							{results.duration.locale}
						</CardText>
					</Card>
				))} */}
			</center>
		</div>
	);
};

export default Results;
// key = {results.flightNumnber.id }
