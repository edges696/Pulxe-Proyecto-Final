import React from "react";
import { Link } from "react-router-dom";

export const Password = () => {
	return (
		<div className="container mt-5">
			<div className="row-lg">
				<div className="container">
					<div className="row mb-5">
						<div className="col text-center mt-9">
							<h1>Cambio de Contraseña</h1>
						</div>
					</div>
				</div>
				<form>
					<div className="col-12">
						<div className="input-group mb-6">
							<div className="input-group-prepend">
								<span className="input-group-text">Correo</span>
							</div>
							<input type="text" className="form-control" placeholder="Ingresa tu Correo Electronico" />
						</div>
						<br />
						<div className="input-group mb-6">
							<div className="input-group-prepend">
								<span className="input-group-text">Contraseña</span>
							</div>
							<input type="text" className="form-control" placeholder="Ingresa tu nueva contraseña" />
						</div>
						<br />
						<div className="input-group mb-6">
							<div className="input-group-prepend">
								<span className="input-group-text">Confirma Contraseña</span>
							</div>
							<input type="text" className="form-control" placeholder="Confirma tu nueva contraseña" />
						</div>
						<br />
						<div className="container">
							<div className="row mt-5">
								<div className="col text-center">
									<button type="submit" className="btn btn-danger">
										Cambiar contraseña
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>{" "}
			</div>
		</div>
	);
};
