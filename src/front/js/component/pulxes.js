import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Pulxes = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5">
			<div className="col-4 float-left mb-5">
				<div className="card shadow">
					<img
						src="https://image.freepik.com/foto-gratis/carpintero-trabajando_23-2147773407.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title text-center">{props.nombre}</h5>
						<div className="row">
							<div className="col-12">
								<div className="col-6 float-left font-weight-bold">Categoria</div>
								<div className="col-6 float-left tipoPulxe">{props.categoria}</div>
							</div>
							<div className="col-12">
								<div className="col-6 float-left font-weight-bold">Pulxe</div>
								<div className="col-6 float-left tipoPulxe">{props.pulxe}</div>
							</div>
							<div className="col-12">
								<div className="col-6 float-left font-weight-bold">Provincia</div>
								<div className="col-6 float-left">{props.provincia}</div>
							</div>
							<div className="col-12">
								<div className="col-6 float-left font-weight-bold">Cantón</div>
								<div className="col-6 float-left">{props.canton}</div>
							</div>
							<div className="col-12">
								<div className="col-6 float-left font-weight-bold">Distrito</div>
								<div className="col-6 float-left">{props.distrito}</div>
							</div>
							<div className="col-12">
								<div className="col-6 float-left font-weight-bold">Años EXP</div>
								<div className="col-6 float-left">{props.experiencia}</div>
							</div>
							<div className="col-12">
								<div className="col-6 float-left font-weight-bold">Calificación</div>
								<div className="col-6 float-left">{props.calificacionPromedio}</div>
							</div>
							<div className="col-12 text-center mt-3">
								<Link to={`/single/${props.id}`}>
									<div className="btn btn-primary">Ver Pulxe</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
Pulxes.propTypes = {
	nombre: PropTypes.string,
	pulxe: PropTypes.string,
	categoria: PropTypes.string,
	servicio: PropTypes.string,
	canton: PropTypes.string,
	distrito: PropTypes.string,
	provincia: PropTypes.string,
	experiencia: PropTypes.number,
	numero: PropTypes.number,
	calificacionPromedio: PropTypes.number,
	id: PropTypes.number
};
