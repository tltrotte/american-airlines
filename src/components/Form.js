import React, { Component } from "react";
import { Button } from "reactstrap";
class Form extends Component {
	render() {
		return (
			<div>
				<center>
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

						<Button color='primary'> Search </Button>
					</form>
				</center>
			</div>
		);
	}
}

export default Form;
