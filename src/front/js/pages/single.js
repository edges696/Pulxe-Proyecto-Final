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
				<div className="col-12 float-left p-0 bgImgSingle">
					<div className="imgSingle" />
				</div>
				<div className="col-12">
					<div className="col-12 float-left text-center mb-1">
						<div className="col-12 float-left">
							<h1>{store.pulxes[params.theid].nombre}</h1>
						</div>
						<div className="col-12 text1_5r">
							<div className="col-6 float-left font-weight-bold text-right">Pulxe</div>
							<div className="col-6 float-left tipoPulxe text-left">
								{store.pulxes[params.theid].pulxe}
							</div>
						</div>
						<div className="col-12 float-left text-center">
							<div className="col-12 float-left font-weight-bold">
								Calificación
								<span className="ml-2">
									{store.pulxes[params.theid].calificacion}
									<i className="fas fa-star yellow" />
								</span>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="col-12 float-left">
							<div className="col-6 float-left">
								{" "}
								<span className="font-weight-bold">Categoria: </span>
								{store.pulxes[params.theid].categoria}
							</div>
						</div>
						<div className="col-12 float-left">
							<div className="col-4 p-0 float-left">
								<div className="col-12 ">
									<span className="font-weight-bold">Provincia: </span>
									{store.pulxes[params.theid].provincia}
								</div>
								<div className="col-12" />
							</div>
							<div className="col-4 p-0 float-left">
								<div className="col-12">
									<span className="font-weight-bold">Cantón: </span>
									{store.pulxes[params.theid].canton}
								</div>
							</div>
							<div className="col-4 p-0 float-left">
								<div className="col-12">
									<span className="font-weight-bold">Distrito: </span>
									{store.pulxes[params.theid].distrito}
								</div>
							</div>
						</div>
						<div className="col-12 float-left">
							<div className="col-6 float-left">
								<span className="font-weight-bold">Años EXP: </span>
								{store.pulxes[params.theid].añosEXP}
							</div>
						</div>
						<div className="col-12 float-left">
							<div className="col-6 float-left">
								<span className="font-weight-bold">Numero: </span>
								{store.pulxes[params.theid].numero}
							</div>
						</div>
						<div className="col-12 flost-left">
							<div className="col-12 font-weight-bold float-left">Descripcion</div>
							<div className="col-12 float-left">{store.pulxes[params.theid].descripcion}</div>
						</div>
						<div className="col-12 mt-1 text-center">
							<div className="col-4 float-left text4r">
								<a
									href={whatsapp}
									id="ws"
									className="wsColorText"
									target="_blank"
									rel="noopener noreferrer">
									<i className="fab fa-whatsapp" />
								</a>
							</div>
							<div className="col-4 float-left text4r">
								<a href={llamar} className="llamadaColorText">
									<i className="fas fa-phone" />
								</a>
							</div>
							<div className="col-4 float-left text4r">
								<a
									href={whatsapp}
									id="ws"
									className="wsColorText"
									target="_blank"
									rel="noopener noreferrer">
									<i className="fab fa-whatsapp" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-12 text-center my-4">
				<Link to="/pulxesIndex" className="btn btn-danger">
					Regresar al Directorio
				</Link>
			</div>
		</div>
	);
};
