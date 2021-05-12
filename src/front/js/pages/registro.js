import React, { useContext, useDebugValue, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const Registro = () => {
	const { store, actions } = useContext(Context);
	const [nameCrear, setNameCrear] = useState("");
	const [mailCrear, setMailCrear] = useState("");
	const [numeroCrear, setNumeroCrear] = useState("");
	const [passwordCrear, setPasswordCrear] = useState("");
	const [categoriaCrear, setCategoriaCrear] = useState("");
	const [pulxeCrear, setPulxeCrear] = useState("");
	const [experienciaCrear, setExperienciaCrear] = useState("");
	const [descripcionCrear, setDescripcionCrear] = useState("");
	const [provinciaCrear, setProvinciaCrear] = useState("");
	const [cantonCrear, setCantonCrear] = useState("");
	const [distritoCrear, setDistritoCrear] = useState("");
	const [auth, setAuth] = useState(false);
	console.log(categoriaCrear);
	const crear = e => {
		e.preventDefault();
		const body = {
			name: nameCrear,
			mail: mailCrear,
			numero: numeroCrear,
			password: passwordCrear,
			categoria: categoriaCrear,
			pulxe: pulxeCrear,
			experiencia: experienciaCrear,
			descripcion: descripcionCrear,
			provincia: provinciaCrear,
			canton: cantonCrear,
			distrito: distritoCrear
		};
		console.log(body);

		fetch("https://3001-azure-horse-2353jaum.ws-us04.gitpod.io/api/pulxes", {
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
							type="text"
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
							type="text"
							required
							onChange={e => setPasswordCrear(e.target.value)}
							className="form-control"
							placeholder="Contraseña"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
					</div>
					<div className="col text-left mt-9">
						<h4>Datos del servicio</h4>
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

					<div className="input-group mb-3">
						<label className="input-group-text">Pulxe</label>
						<select
							className="form-control"
							id="inputGroupSelect01"
							required
							value={pulxeCrear}
							onChange={e => setPulxeCrear(e.target.value)}>
							<option selected>Seleccione un Pulxe</option>
							<option value="Remodelación">1</option>
							<option value="Pintura">2</option>
							<option value="Pisos">3</option>
							<option value="Enchapes">4</option>
							<option value="Goteras">5</option>
							<option value="Jardín">6</option>
						</select>
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
						<span className="input-group-text">Descripción del servicio</span>
						<textarea
							className="form-control"
							aria-label="With textarea"
							required
							onChange={e => setDescripcionCrear(e.target.value)}
						/>
					</div>

					<div className="col text-left mt-9">
						<h4>Ubicación del servicio</h4>
					</div>

					<div className="row">
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
									<select
										className="form-control"
										id="inputGroupSelect01"
										required
										value={distritoCrear}
										onChange={e => setDistritoCrear(e.target.value)}>
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
