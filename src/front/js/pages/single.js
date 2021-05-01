import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const whatsapp = "https://wa.me/506" + store.pulxes[params.theid].numero;
	const llamar = "tel:+506" + store.pulxes[params.theid].numero;

	return (
		<div className="container mt-5">
			<div className="row rounded shadow border overflow-hidden">
				<div className="col-6 float-left p-0">
					<img
						className="img-fluid"
						src="https://image.freepik.com/foto-gratis/carpintero-trabajando_23-2147773407.jpg"
					/>
				</div>
				<div className="col-6 float-left pt-3">
					<div className="col-12 text-center">
						<h1>{store.pulxes[params.theid].nombre}</h1>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="col-6 float-left font-weight-bold">Categoria</div>
							<div className="col-6 float-left tipoPulxe">{store.pulxes[params.theid].categoria}</div>
						</div>
						<div className="col-12">
							<div className="col-6 float-left font-weight-bold">Pulxe</div>
							<div className="col-6 float-left tipoPulxe">{store.pulxes[params.theid].pulxe}</div>
						</div>
						<div className="col-12">
							<div className="col-6 float-left font-weight-bold">Ubicación</div>
							<div className="col-6 float-left">{store.pulxes[params.theid].ubicacion}</div>
						</div>
						<div className="col-12">
							<div className="col-6 float-left font-weight-bold">Años EXP</div>
							<div className="col-6 float-left">{store.pulxes[params.theid].añosEXP}</div>
						</div>
						<div className="col-12">
							<div className="col-6 float-left font-weight-bold">Numero</div>
							<div className="col-6 float-left">{store.pulxes[params.theid].numero}</div>
						</div>
						<div className="col-12">
							<div className="col-6 float-left font-weight-bold">Calificación</div>
							<div className="col-6 float-left">{store.pulxes[params.theid].calificacion}</div>
						</div>
						<div className="col-12 mt-1 text-center">
							<div className="col-6 float-left text4r">
								<a
									href={whatsapp}
									id="ws"
									className="wsColorText"
									target="_blank"
									rel="noopener noreferrer">
									<i className="fab fa-whatsapp" />
								</a>
							</div>
							<div className="col-6 float-left text4r">
								<a href={llamar} className="llamadaColorText">
									<i className="fas fa-phone" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-12 text-center mt-4">
				<Link to="/pulxesIndex" className="btn btn-danger">
					Volver
				</Link>
			</div>
		</div>
	);
};
