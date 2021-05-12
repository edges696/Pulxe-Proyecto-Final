import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const CrearCuenta = () => {
	const { store, actions } = useContext(Context);
	const [nameCrear, setNameCrear] = useState("");
	const [mailCrear, setMailCrear] = useState("");
	const [passwordCrear, setPasswordCrear] = useState("");
	const [numeroCrear, setNumeroCrear] = useState("");
	const [auth, setAuth] = useState(false);

	const crear = e => {
		e.preventDefault();
		const body = { name: nameCrear, mail: mailCrear, password: passwordCrear, numero: numeroCrear };
		console.log(body);

		fetch("https://3001-olive-earthworm-eho6taex.ws-us04.gitpod.io/api/user", {
			method: "POST",
			body: JSON.stringify(body),
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(data => {
				sessionStorage.setItem("my_token", data.token);
				console.log(sessionStorage);
				setAuth(true);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container mt-5">
			<div className="col text-center mt-9">
				<h1>Crear Cuenta</h1>
			</div>

			<div className="col text-left mt-9">
				<h4>Datos de Cuenta</h4>
			</div>

			<form onSubmit={crear}>
				<div className="input-group mb-3">
					<span className="input-group-text" id="basic-addon1">
						Nombre completo
					</span>
					<input
						type="text"
						required
						onChange={e => setNameCrear(e.target.value)}
						className="form-control"
						placeholder="Nombre y apellidos"
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
				</div>

				<div className="input-group mb-3">
					<span className="input-group-text" id="basic-addon1">
						Correo electrónico
					</span>
					<input
						type="email"
						required
						onChange={e => setMailCrear(e.target.value)}
						className="form-control"
						placeholder="usuario@ejemplo.com"
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
				</div>

				<div className="input-group mb-3">
					<span className="input-group-text" id="basic-addon1">
						Número de teléfono
					</span>
					<input
						type="number"
						required
						onChange={e => setNumeroCrear(e.target.value)}
						className="form-control"
						placeholder="Número de teléfono para contacto"
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
				</div>

				<div className="input-group mb-3">
					<span className="input-group-text" id="basic-addon1">
						Contraseña
					</span>
					<input
						type="password"
						required
						onChange={e => setPasswordCrear(e.target.value)}
						className="form-control"
						placeholder="Contraseña"
						aria-label="password"
						aria-describedby="basic-addon1"
					/>
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text" id="basic-addon1">
						Confirmar Contraseña
					</span>
					<input
						type="text"
						required
						className="form-control"
						placeholder="Confirmar Contraseña"
						aria-label="confirm password"
						aria-describedby="basic-addon1"
					/>
				</div>

				<div className="container">
					<div className="row my-5">
						<div className="col text-center">
							<button type="submit" className="btn btn-primary">
								Crear Cuenta
							</button>
						</div>
						<div className="col-12 text-center mt-3">
							<Link to="/registro">Registrarme como Pulxe</Link>
						</div>
					</div>
				</div>
			</form>
			{auth ? <Redirect to="/" /> : null}
		</div>
	);
};
