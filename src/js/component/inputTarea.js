import React from "react";
import PropTypes from "prop-types";

export class InputTarea extends React.Component {
	constructor(props) {
		super(props);

		this.textInput = React.createRef();
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	handleKeyDown = e => {
		if (e.key === "Enter") {
			this.props.valor(this.textInput.current.value);
			this.textInput.current.value = "";
		}
	};

	render() {
		return (
			<div className="container">
				<input
					ref={this.textInput}
					type="text"
					onKeyDown={this.handleKeyDown}
				/>
			</div>
		);
	}
}
InputTarea.propTypes = {
	valor: PropTypes.func
};
export default InputTarea;
