import React, { useContext, useDebugValue } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const CrearCuenta = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container mt-5">
			<div className="col text-center mt-9">
				<h1>Crear Cuenta</h1>
			</div>

			<div className="col text-left mt-9">
				<h4>Datos de Cuenta</h4>
			</div>

			<form>
				<div className="input-group mb-3">
					<span className="input-group-text" id="basic-addon1">
						Nombre completo
					</span>
					<input
						type="text"
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
						type="text"
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
						type="text"
						className="form-control"
						placeholder="Contraseña"
						aria-label="password"
						aria-describedby="basic-addon1"
					/>
				</div>

				<div className="container mt-5">
					<button type="submit" className="btn btn-primary btn-lg col-2">
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
};
