import React from "react";
import PropTypes from "prop-types";

const Lista = props => {
	const li = props.datosLista.map((item, i) => {
		return (
			<div key={i}>
				<div
					className="card text-white bg-info mb-3"
					style="max-width: 18rem;">
					<div className="card-header">Header</div>
					<div className="card-body">
						<h5 className="card-title">Info card title</h5>
						<p className="card-text">{item.label}</p>
					</div>
					<a
						className="float-right text-secondary"
						onClick={() => {
							props.borrar(item);
						}}>
						<i className="fas fa-times" />
					</a>
				</div>
			</div>
		);
	});

	return <ul>{li}</ul>;
};

Lista.propTypes = {
	datosLista: PropTypes.array,

	borrar: PropTypes.func
};
export default Lista;
