import React, { Component } from "react";
import { Button } from "reactstrap";
class Form extends Component {
	render() {
		return (
			<div>
				<center>
					{/* Form handled once submit button is pressed and props available for main App */}
					<form onSubmit={this.props.getFlightResults}>
						<h4>Flight Tracker</h4>
						<div className='form-group'>
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
						</div>

						<Button color='primary'> Search </Button>
					</form>
				</center>
			</div>
		);
	}
}

export default Form;
