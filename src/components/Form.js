import React, { Component } from "react";

class Form extends Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.getFlightResults}>
					<input type='text' name='orgin' placeholder='orgin airport code' />
					<input
						type='text'
						name='destination'
						placeholder='destination airport code'
					/>

					<button> Search </button>
				</form>
			</div>
		);
	}
}

export default Form;