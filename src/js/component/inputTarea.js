import React from "react";

export class InputTarea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imputText: ""
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value =
			target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		console.log(this.state);
		this.setState({
			[name]: value
		});
	}

	render() {
		return <div className="container" />;
	}
}

export default InputTarea;
