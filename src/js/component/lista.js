import React from "react";
import PropTypes from "prop-types";

const Lista = props => {
	const li = props.datosLista.map((item, i) => {
		let f1 = new Date().getTime();
		let f2 = new Date(item.date_event).getTime();

		if (f1 > f2) {
			return (
				<div key={i} className="card border-info mb-3">
					<div className="card-header">Header</div>
					<div className="card-body text-info">
						<h5 className="card-title">Nueva Tarea</h5>
						<p className="card-text">
							{item.label}
							{item.date_event}
						</p>
						<input
							type="checkbox"
							aria-label="Checkbox for following text input"
						/>
					</div>
				</div>
			);
		}
		if (f1 == f2) {
			return (
				<div key={i} className="card border-success mb-3">
					<div className="card-header">Header</div>
					<div className="card-body text-success">
						<h5 className="card-title">Nueva Tarea</h5>
						<p className="card-text">
							{item.label}
							{item.date_event}
						</p>
						<input
							type="checkbox"
							aria-label="Checkbox for following text input"
						/>
					</div>
				</div>
			);
		}
		if (f1 < f2) {
			return (
				<div key={i} className="card border-danger mb-3">
					<div className="card-header">Header</div>
					<div className="card-body text-danger">
						<h5 className="card-title">Nueva Tarea</h5>
						<p className="card-text">
							{item.label}
							{item.date_event}
						</p>
						<input
							type="checkbox"
							aria-label="Checkbox for following text input"
						/>
					</div>
				</div>
			);
		}
	});

	return <ul>{li}</ul>;
};

Lista.propTypes = {
	datosLista: PropTypes.array,

	borrar: PropTypes.func
};
export default Lista;
