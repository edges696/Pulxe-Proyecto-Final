import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);

	const enviar = e => {
		e.preventDefault();
		const body = { mail: mail, password: password };
		console.log(body);
		fetch("https://3001-apricot-landfowl-qpbyur1m.ws-us04.gitpod.io/api/login", {
			method: "POST",
			body: JSON.stringify(body),
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(data => {
				actions.changename(data.username);
				console.log(data);
				sessionStorage.setItem("my_token", data.token);
				alert("has ingresado correctamente", data);
				setAuth(true);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container mt-5">
			<div className="tab-content" id="nav-tabContent">
				<div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
					<div className="col-12 text-center">
						<h2 className="col-12">Login</h2>
					</div>

					<form onSubmit={enviar}>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									<i className="fas fa-at" />
								</span>
							</div>
							<input
								id="mail"
								onChange={e => setMail(e.target.value)}
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
								onChange={e => setPassword(e.target.value)}
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
					<div className="col-12 text-center mt-5">
						<Link to="/password">Cambiar contraseña</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
