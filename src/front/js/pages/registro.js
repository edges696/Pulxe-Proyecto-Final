import React, { useContext, useDebugValue } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Registro = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container mt-5">
			<div className="col text-center mt-9">
				<h1>Registrarme</h1>
			</div>
			<div>
				<div className="input-group input-group-sm mb-3">
					<span className="input-group-text" id="inputGroup-sizing-sm">
						Nombre completo
					</span>
					<input
						type="text"
						className="form-control"
						aria-label="Sizing example input"
						aria-describedby="inputGroup-sizing-sm"
					/>
				</div>

				<div className="input-group input-group-sm mb-3">
					<select className="form-select" aria-label="Default select example">
						<option selected>Open this select menu</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</div>

				<div className="input-group mb-3">
					<span className="input-group-text">Precio en colones desde ₡</span>
					<span className="input-group-text">0.00</span>
					<input
						type="text"
						className="form-control"
						aria-label="Dollar amount (with dot and two decimal places)"
					/>
				</div>

				<div className="input-group">
					<input
						type="text"
						className="form-control"
						aria-label="Dollar amount (with dot and two decimal places)"
					/>
					<span className="input-group-text">Precio en colones hasta ₡</span>
					<span className="input-group-text">0.00</span>
				</div>
			</div>
		</div>
	);
};
