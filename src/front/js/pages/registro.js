import React, { useContext, useDebugValue } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Registro = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container mt-5">
			<div className="col text-center mt-9">
				<h1>Publicar mi servicio</h1>
			</div>
			<div>
				<div className="col text-left mt-9">
					<h4>Datos de contacto</h4>
				</div>
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
				<div className="col text-left mt-9">
					<h4>Datos del servicio</h4>
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
					<span className="input-group-text" id="basic-addon1">
						Años de Experiencia
					</span>
					<input
						type="text"
						className="form-control"
						placeholder="Años cumplidos de brindar el servicio"
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
				</div>

				<div className="input-group mb-3">
					<span className="input-group-text">Descripción del servicio</span>
					<textarea className="form-control" aria-label="With textarea" />
				</div>

				<div className="col text-left mt-9">
					<h4>Ubicación del servicio</h4>
				</div>

				<div className="row">
					<div className="col-sm">
						<div className="input-group mb-3">
							<label className="input-group-text">Provincia</label>
							<select className="form-control" id="inputGroupSelect01">
								<option selected>Seleccione</option>
								<option value="1">San José</option>
								<option value="2">Alajuela</option>
								<option value="3">Heredia</option>
								<option value="3">Cartago</option>
								<option value="3">Puntarenas</option>
								<option value="3">Limón</option>
								<option value="3">Guanacaste</option>
							</select>
						</div>
					</div>
					<div className="col-sm">
						<div className="col-sm">
							<div className="input-group mb-3">
								<label className="input-group-text">Cantón</label>
								<select className="form-control" id="inputGroupSelect01">
									<option selected>Seleccione</option>
									<option value="1">01</option>
									<option value="2">02</option>
									<option value="3">03</option>
									<option value="3">04</option>
									<option value="3">05</option>
									<option value="3">06</option>
								</select>
							</div>
						</div>
					</div>
					<div className="col-sm">
						<div className="col-sm">
							<div className="input-group mb-3">
								<label className="input-group-text">Distrito</label>
								<select className="form-control" id="inputGroupSelect01">
									<option selected>Seleccione</option>
									<option value="1">01</option>
									<option value="2">02</option>
									<option value="3">03</option>
									<option value="3">04</option>
									<option value="3">05</option>
									<option value="3">06</option>
								</select>
							</div>
						</div>
					</div>
				</div>

				<div className="col text-left mt-9">
					<h4>Rango de Precio</h4>
				</div>

				<div className="input-group mb-3">
					<span className="input-group-text">Precio minímo</span>
					<span className="input-group-text">₡</span>
					<input
						type="text"
						className="form-control"
						aria-label="Dollar amount (with dot and two decimal places)"
					/>
				</div>

				<div className="input-group mb-3">
					<span className="input-group-text">Precio máximo</span>
					<span className="input-group-text">₡</span>
					<input
						type="text"
						className="form-control"
						aria-label="Dollar amount (with dot and two decimal places)"
					/>
				</div>
				<div className="container">
					<div className="row mt-5 mb-5">
						<div className="col text-center">
							<button type="submit" className="btn btn-primary">
								Publicar mi servicio
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
