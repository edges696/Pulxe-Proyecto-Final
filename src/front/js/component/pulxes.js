import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Pulxes = props => {
	const { store, actions } = useContext(Context);
	let urlimagen =
		"https://www.papernest.es/blog/wp-content/uploads/2020/06/shutterstock_164852135-e1593077044741.jpg";
	if (props.categoria === "Mascotas") {
		urlimagen =
			"https://images.unsplash.com/photo-1542741065-3c98eaf187b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
	}
	if (props.categoria === "Hogar") {
		urlimagen =
			"https://www.papernest.es/blog/wp-content/uploads/2020/06/shutterstock_164852135-e1593077044741.jpg";
	}
	if (props.categoria === "Fitness") {
		urlimagen =
			"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
	}
	if (props.categoria === "Belleza") {
		urlimagen = "https://i.postimg.cc/WzB09PP9/Screen-Shot-2021-05-18-at-8-34-57-PM.png";
	}
	if (props.categoria === "Mecánica") {
		urlimagen =
			"https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
	}
	if (props.categoria === "Mandados") {
		urlimagen =
			"https://images.unsplash.com/photo-1512475673240-c0e17957c46b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
	}
	return (
		<div className="container mt-5">
			<div className="col-4 float-left mb-5">
				<div className="card shadow">
					<img src={urlimagen} className="card-img-top" alt="..." />
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
