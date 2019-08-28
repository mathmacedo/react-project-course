import React, { Component } from "react";
import "./App.css";
import UserOutput from "./components/UserOutput/UserOutput";
import UserInput from "./components/UserInput/UserInput";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Matheus"
		};
	}

	manipulateState = evnt => {
		this.setState({
			name: evnt.target.value
		});
	};

	render() {
		return (
			<div
				style={{
					margin: "10px",
					padding: "10px",
					border: "1px solid #ccc"
				}}
			>
				<UserOutput
					paragraph={"Hello"}
					paragraph2={"Welcome"}
					name={this.state.name}
				/>
				<UserOutput />

				<UserInput
					handlerEvent={this.manipulateState}
					style={{ padding: "10px" }}
				/>
			</div>
		);
	}
}

export default App;
