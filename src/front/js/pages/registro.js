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

				<div className="input-group mb-3">
					<label className="input-group-text">Categoría</label>
					<select className="form-control" id="inputGroupSelect01">
						<option selected>Seleccione una categoría</option>
						<option value="1">Hogar</option>
						<option value="2">Mascotas</option>
						<option value="3">Mandados</option>
						<option value="3">Mecánica</option>
						<option value="3">Entrenamiento personal</option>
						<option value="3">Belleza</option>
					</select>
				</div>

				<div className="input-group mb-3">
					<label className="input-group-text">Pulxe</label>
					<select className="form-control" id="inputGroupSelect01">
						<option selected>Seleccione una categoría</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="3">4</option>
						<option value="3">5</option>
						<option value="3">6</option>
					</select>
				</div>

				<div className="input-group mb-3">
					<span className="input-group-text">Descripción</span>
					<textarea className="form-control" aria-label="With textarea" />
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

				<div className="input-group mb-3">
					<span className="input-group-text">Precio en colones hasta ₡</span>
					<span className="input-group-text">0.00</span>
					<input
						type="text"
						className="form-control"
						aria-label="Dollar amount (with dot and two decimal places)"
					/>
				</div>
			</div>
		</div>
	);
};
