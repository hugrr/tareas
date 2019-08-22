import React from "react";

import PropTypes from "prop-types";

//create your first component
export default class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imputText: "",
			date_event: ""
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
		return (
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Crear Tarea
							</h5>
							<div className="input-group input-group-lg" />
							<div className="modal-body">
								<div className="input-group-prepend" />
								<label htmlFor="inputDate">Fecha Evento</label>
								<input
									id="date"
									name="date_event"
									onChange={this.handleInputChange}
									type="date"
									className="form-control"
								/>
								<label htmlFor="inputDate">
									Descripcion Tarea
								</label>
								<input
									type="text"
									name="inputText"
									onChange={this.handleInputChange}
									className="form-control"
									aria-label="Sizing example input"
									aria-describedby="inputGroup-sizing-lg"
								/>
							</div>

							<div />
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-primary btn-lg"
								onClick={() => {
									this.props.saveInput({
										inputText: this.state.inputText,
										date_event: this.state.date_event
									});
								}}
								data-dismiss="modal">
								{""}
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
Modal.propTypes = {
	saveInput: PropTypes.func
};
