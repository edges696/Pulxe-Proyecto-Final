import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const [mailCrear, setMailCrear] = useState("");
	const [passwordCrear, setPasswordCrear] = useState("");
	const [auth, setAuth] = useState(false);

	const crear = e => {
		e.preventDefault();
		const body = { mail: mailCrear, password: passwordCrear };
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
						<h2 className="col-12">Ingresar a mi cuenta</h2>
					</div>

					<form onSubmit={crear}>
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

						<div className="col-12 text-center">
							<button type="submit" className="btn btn-primary">
								Ingresar
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
