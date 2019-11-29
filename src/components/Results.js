import React, { Component } from "react";
import Form from "./Form";

const Results = ({ results }) => {
	return (
		<div>
			{results.map(results => (
				<div className='card'>
					<div className='card-body'>
						<div className='card-header'>
							<h4 className='card-title'>
								Flight Number #{results.flightNumber}
							</h4>
						</div>
						<h5 className='card-title'>
							Flight Origin: {results.origin.city} ({results.origin.code})
						</h5>

						<h5 className='card-title'>
							Flight Destination: {results.destination.city} (
							{results.destination.code})
						</h5>

						<h5 className='card-title'>
							Approximate flight duration:{results.duration.locale}
						</h5>
					</div>
				</div>
			))}
		</div>
	);
};

export default Results;
// key = {results.flightNumnber.id }
