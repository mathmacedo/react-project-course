import React, { Component } from "react";
import "./UserOutput.css";

class UserOutput extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<p>{this.props.paragraph}</p>
				<p>{this.props.paragraph2}</p>
				<p>{this.props.name}</p>
			</div>
		);
	}
}

export default UserOutput;
