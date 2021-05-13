import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const Registro = () => {
	const { store, actions } = useContext(Context);
	const [nombreCrear, setNombreCrear] = useState("");
	const [pulxeCrear, setPulxeCrear] = useState("");
	const [categoriaCrear, setCategoriaCrear] = useState("");
	const [cantonCrear, setCantonCrear] = useState("");
	const [distritoCrear, setDistritoCrear] = useState("");
	const [provinciaCrear, setProvinciaCrear] = useState("");
	const [descripcionCrear, setDescripcionCrear] = useState("");
	const [experienciaCrear, setExperienciaCrear] = useState("");
	const [numeroCrear, setNumeroCrear] = useState("");
	const [calificacionPromedioCrear, setCalificacionPromedioCrear] = useState("");
	const [calificacionCantidadCrear, setCalificacionCantidadCrear] = useState("");
	const [calificacionTotalCrear, setCalificacionTotalCrear] = useState("");
	const [passwordCrear, setPasswordCrear] = useState("");
	const [auth, setAuth] = useState(false);

	const crear = e => {
		e.preventDefault();
		const body = {
			nombre: nombreCrear,
			pulxe: pulxeCrear,
			categoria: categoriaCrear,
			canton: cantonCrear,
			distrito: distritoCrear,
			provincia: provinciaCrear,
			descripcion: descripcionCrear,
			experiencia: experienciaCrear,
			numero: numeroCrear,
			calificacionPromedio: calificacionPromedioCrear,
			calificacionCantidad: calificacionCantidadCrear,
			calificacionTotal: calificacionTotalCrear,
			password: passwordCrear
		};
		console.log(body);

		fetch("https://3001-azure-dormouse-1ytrzaox.ws-us04.gitpod.io/api/pulxes", {
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
				<h1>Publicar mi servicio</h1>
			</div>
			<div>
				<div className="col text-left mt-9">
					<h4>Datos de contacto</h4>
				</div>
				<form onSubmit={crear}>
					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							Nombre completo
						</span>
						<input
							type="text"
							required
							onChange={e => setNombreCrear(e.target.value)}
							className="form-control"
							placeholder="Nombre y apellidos"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
					</div>

					<div className="input-group mb-3">
						<label className="input-group-text">Pulxe</label>
						<select
							className="form-control"
							id="inputGroupSelect01"
							required
							value={pulxeCrear}
							onChange={e => setPulxeCrear(e.target.value)}>
							<option selected>Seleccione un Pulxe</option>
							<option value="Remodelación">Remodelación</option>
							<option value="Pintura">Pintura</option>
							<option value="Pisos">Pisos</option>
							<option value="Enchapes">Enchapes</option>
							<option value="Goteras">Goteras</option>
							<option value="Jardín">Jardín</option>
						</select>
					</div>

					<div className="input-group mb-3">
						<label className="input-group-text">Categoría</label>
						<select
							className="form-control"
							id="inputGroupSelect01"
							required
							value={categoriaCrear}
							onChange={e => setCategoriaCrear(e.target.value)}>
							<option selected>Seleccione una categoría</option>
							<option value="Hogar">Hogar</option>
							<option value="Mascotas">Mascotas</option>
							<option value="Mandados">Mandados</option>
							<option value="Mecánica">Mecánica</option>
							<option value="Fitness">Fitness</option>
							<option value="Belleza">Belleza</option>
						</select>
					</div>

					<div className="col-sm">
						<div className="input-group mb-3">
							<label className="input-group-text">Provincia</label>
							<select
								className="form-control"
								id="inputGroupSelect01"
								required
								value={provinciaCrear}
								onChange={e => setProvinciaCrear(e.target.value)}>
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
								<select
									className="form-control"
									id="inputGroupSelect01"
									required
									value={cantonCrear}
									onChange={e => setCantonCrear(e.target.value)}>
									<option selected>Seleccione</option>
									<option value="1">San José</option>
								</select>
							</div>
						</div>
					</div>

					<div className="col-sm">
						<div className="col-sm">
							<div className="input-group mb-3">
								<label className="input-group-text">Distrito</label>
								<select
									className="form-control"
									id="inputGroupSelect01"
									required
									value={distritoCrear}
									onChange={e => setDistritoCrear(e.target.value)}>
									<option selected>Seleccione</option>
									<option value="1">Uruca</option>
								</select>
							</div>
						</div>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							Descripción
						</span>
						<input
							type="text"
							required
							onChange={e => setDescripcionCrear(e.target.value)}
							className="form-control"
							placeholder="Años cumplidos de brindar el servicio"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							Años de Experiencia
						</span>
						<input
							type="text"
							required
							onChange={e => setExperienciaCrear(e.target.value)}
							className="form-control"
							placeholder="Años cumplidos de brindar el servicio"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							Número
						</span>
						<input
							type="text"
							required
							onChange={e => setNumeroCrear(e.target.value)}
							className="form-control"
							placeholder="Nombre y apellidos"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							Calificación Promedio
						</span>
						<input
							type="text"
							required
							onChange={e => setCalificacionPromedioCrear(e.target.value)}
							className="form-control"
							placeholder="Nombre y apellidos"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							Calificación Cantidad
						</span>
						<input
							type="text"
							required
							onChange={e => setCalificacionCantidadCrear(e.target.value)}
							className="form-control"
							placeholder="Nombre y apellidos"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							Calificación Total
						</span>
						<input
							type="text"
							required
							onChange={e => setCalificacionTotalCrear(e.target.value)}
							className="form-control"
							placeholder="Nombre y apellidos"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							Password
						</span>
						<input
							type="text"
							required
							onChange={e => setPasswordCrear(e.target.value)}
							className="form-control"
							placeholder="Nombre y apellidos"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
					</div>

					<div className="col text-left mt-9">
						<h4>Datos del servicio</h4>
					</div>

					<div className="col text-left mt-9">
						<h4>Ubicación del servicio</h4>
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
				</form>
			</div>
		</div>
	);
};
