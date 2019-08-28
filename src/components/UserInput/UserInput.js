import React, { Component } from "react";
import "./UserInput.css";

class UserInput extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<input
					onChange={this.props.handlerEvent}
					style={this.props.style}
				/>
			</div>
		);
	}
}

export default UserInput;
