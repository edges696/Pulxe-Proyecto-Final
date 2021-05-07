import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const [nameCrear, setNameCrear] = useState("");
	const [mailCrear, setMailCrear] = useState("");
	const [passwordCrear, setPasswordCrear] = useState("");
	const [numeroCrear, setNumeroCrear] = useState("");
	const [auth, setAuth] = useState(false);

	const crear = e => {
		e.preventDefault();
		const body = { name: nameCrear, mail: mailCrear, password: passwordCrear, numero: numeroCrear };
		console.log(body);

		fetch("https://3001-tan-porpoise-tasj15xn.ws-us03.gitpod.io/api/user", {
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
			<div className="tab-content" id="nav-tabContent">
				<div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
					<div className="col-12 text-center">
						<h2 className="col-12">Crear usuario</h2>
					</div>

					<form onSubmit={crear}>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									<i className="fas fa-at" />
								</span>
							</div>
							<input
								id="name"
								onChange={e => setNameCrear(e.target.value)}
								name="name"
								type="text"
								className="form-control"
								placeholder="Name"
								aria-label="Name"
								aria-describedby="basic-addon1"
							/>
						</div>

						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									<i className="fas fa-at" />
								</span>
							</div>
							<input
								id="mail"
								onChange={e => setMailCrear(e.target.value)}
								name="mail"
								type="text"
								className="form-control"
								placeholder="Mail"
								aria-label="Mail"
								aria-describedby="basic-addon1"
							/>
						</div>

						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									<i className="fas fa-key" />
								</span>
							</div>
							<input
								type="password"
								onChange={e => setPasswordCrear(e.target.value)}
								id="password"
								name="password"
								className="form-control"
								placeholder="Password"
								aria-label="Username"
								aria-describedby="basic-addon1"
							/>
						</div>

						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									<i className="fas fa-at" />
								</span>
							</div>
							<input
								id="numero"
								onChange={e => setNumeroCrear(e.target.value)}
								name="numero"
								type="text"
								className="form-control"
								placeholder="Numero"
								aria-label="Numero"
								aria-describedby="basic-addon1"
							/>
						</div>

						<div className="col-12 text-center">
							<button type="submit" className="btn btn-primary">
								Crear Usuario
							</button>
						</div>
					</form>
					{auth ? <Redirect to="/" /> : null}
				</div>
				<div className="col-12 text-center mt-3">
					<Link to="/password">Cambio de contraseña</Link>
				</div>
			</div>
		</div>
	);
};
