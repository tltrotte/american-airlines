import React, { Component } from "react";
import Form from "./Form";

const Results = ({ results }) => {
	return (
		<div>
			<center>
				<h1>American Airlines</h1>
			</center>
			{results.map(results => (
				<div class='card'>
					<div class='card-body'>
						<h5 class='card-title'>{results.flightNumber}</h5>
						<h5 class='card-title'>{results.origin.code}</h5>
						<h5 class='card-title'>{results.origin.city}</h5>
						<h5 class='card-title'>{results.destination.code}</h5>
						<h5 class='card-title'>{results.destination.city}</h5>
					</div>
				</div>
			))}
		</div>
	);
};

export default Results;
