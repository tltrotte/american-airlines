import React, { Component } from "react";

class Form extends Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.getFlightResults}>
					<input
						type='text'
						name='origin'
						placeholder='origin airport code'
						maxLength='3'
					/>
					<input
						type='text'
						name='destination'
						placeholder='destination airport code'
						maxLength='3'
					/>
					<input type='date' name='travelDate' placeholder='YYYY/MM/DD' />

					<button> Search </button>
				</form>
			</div>
		);
	}
}

export default Form;
