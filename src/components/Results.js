import React, { Component } from "react";
import { Card, CardTitle, CardText } from "reactstrap";

const Results = ({ results }) => {
	return (
		<div>
			<center>
				{/* // .map function looping throuhg each array and grabbing specified item */}
				{results.map(results => (
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
							{/* Attempting to grab the props of Origin and Destination to throw "Error" When nothing is entered in input and search button is pressed */}
							<h4>Flight Number #{results.flightNumber}</h4>
						</CardTitle>
						<CardText>
							<h5>
								{/* {this.props.orgin} */}
								Departs from {results.origin.city} ({results.origin.code}) to
							</h5>{" "}
							<h5>
								{/* {this.props.destination} */}
								{results.destination.city} ({results.destination.code})
							</h5>
							Approximate flight duration:
							{results.duration.locale}
						</CardText>
					</Card>
				))}
			</center>
		</div>
	);
};

export default Results;
// key = {results.flightNumnber.id }
