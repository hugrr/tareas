import React from "react";

import Lista from "./lista.js";
import Modal from "./modal.js";
import DateToday from "./date.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			datosLista: [],
			items: []
		};
		this.saveInput = this.saveInput.bind(this);

		this.obtenerListado = this.obtenerListado.bind(this);
		this.handleInputChange2 = this.handleInputChange2.bind(this);
		this.deleteData = this.deleteData.bind(this);
	}

	componentDidMount() {
		this.obtenerListado();
	}

	handleInputChange2(event) {
		console.log(event.target.value);
		const target = event.target;
		const value =
			target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		console.log(name);
		console.log(value);
		if (value) {
			console.log("aqui 1");
			let elems = this.state.items;
			elems.push(target.value);
			this.setState({
				items: elems
			});
		} else {
			console.log("aqui 2");
			let elems = this.state.items;
			const items = elems.filter(item => {
				return item !== target.value;
			});
			this.setState({
				items: items
			});
		}
	}

	deleteTareas = () => {
		let elems = this.state.items;
		elems.map(item => {
			this.deleteData(item);
		});
		this.setState({
			items: []
		});
	};

	deleteData(id) {
		fetch(
			"https://3000-ca544b2a-814d-4e3b-8a40-35ccdf5e36fd.ws-us0.gitpod.io/api/todo/" +
				id,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				console.log("Elemento Eliminado");
				this.obtenerListado();
			});
	}

	formato(texto) {
		return texto.replace(/^(\d{2})-(\d{2})-(\d{4})$/g, "$3/$2/$1");
	}

	saveInput(data) {
		fetch(
			"https://3000-ca544b2a-814d-4e3b-8a40-35ccdf5e36fd.ws-us0.gitpod.io/api/todo/",
			{
				method: "POST",
				body: JSON.stringify({
					label: data.inputText,
					date_event: this.formato(data.date_event),
					done: false,
					username: "user"
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
			"https://3000-ca544b2a-814d-4e3b-8a40-35ccdf5e36fd.ws-us0.gitpod.io/api/todo/"
		)
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				this.setState({ datosLista: data });
			});
	}

	render() {
		return (
			<div className="container ">
				<h1>Tareas por hacer</h1>
				<DateToday />
				<label className="float-right ">liberar seeccionados</label>
				<p className="float-right ">filter</p>
				<i
					style={{ cursor: "pointer" }}
					className="fas fa-filter float-right "
					onClick={() => this.deleteTareas()}
				/>

				<Lista
					borrar={this.borrar}
					datosLista={this.state.datosLista}
					handleInputChange2={this.handleInputChange2}
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
						<Modal saveInput={this.saveInput} />
					</div>
				</div>
			</div>
		);
	}
}
