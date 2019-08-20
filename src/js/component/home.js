import React from "react";
import InputTarea from "./inputTarea.js";
import Lista from "./lista.js";
import Modal from "./modal.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			datosLista: [],
			userActive: "1"
		};

		this.cambiarvalor = this.cambiarvalor.bind(this);

		this.obtenerListado = this.obtenerListado.bind(this);
	}

	cambiarvalor(valor) {
		let nuevo = this.state.datosLista;
		fetch(
			"https://3000-f3f09454-7985-4bfc-b8e6-01bceb2fc044.ws-us0.gitpod.io/api/todo/" +
				this.state.userActive,
			{
				method: "POST",
				body: JSON.stringify({
					label: valor,
					done: false,
					username: "1"
				}),
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
			.then(res => res.json())
			.then(response => this.obtenerListado());
	}
	obtenerListado() {
		fetch(
			"https://3000-f3f09454-7985-4bfc-b8e6-01bceb2fc044.ws-us0.gitpod.io/api/todo/"
		)
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				this.setState({ datosLista: data });
			});
	}
	componentDidMount() {
		this.obtenerListado();
	}
	borrar(valor) {
		let eliminar = this.state.datosLista;
		eliminar = eliminar.filter(item => {
			return item !== valor;
		});

		this.setState({
			datosLista: eliminar
		});
	}
	render() {
		return (
			<div className="container ">
				<h1>Tareas por hacer</h1>
				<p className="float-right ">filter</p>
				<i className="fas fa-filter float-right " />
				<div className="input ">
					<InputTarea valor={this.cambiarvalor} />
				</div>
				<Lista
					borrar={this.borrar}
					datosLista={this.state.datosLista}
				/>
				<div
					className="card border-dark mb-3 text-center
					">
					<div className="card-header">Header</div>
					<div className="card-body text-dark">
						<h5 className="card-title">Agregar Tarea</h5>
						<p className="card-text">
							<button
								type="button"
								className="btn btn-dark"
								data-toggle="modal"
								data-target="#exampleModal">
								<i className="fas fa-plus" />
							</button>
						</p>
						<Modal />
					</div>
				</div>
			</div>
		);
	}
}
