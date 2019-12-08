import React, { Component } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import "./App.css";
import Logo2 from "./Logo2.png";

class App extends Component {
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
				<Form />
			</div>
		);
	}
}

export default App;
