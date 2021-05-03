import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Pulxes } from "../component/pulxes";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const PulxesIndex = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="col-12 p-0 bluePulxeBG py-4 text-center">
				<ul className="list-unstyled listFilter">
					<li>
						<a href="#" className="text-white" id="hogar">
							Hogar
						</a>
					</li>
					<li>
						<a href="#" className="text-white" id="mascotas">
							Mascotas
						</a>
					</li>
					<li>
						<a href="#" className="text-white" id="mandados">
							Mandados
						</a>
					</li>
					<li>
						<a href="#" className="text-white" id="mecanica">
							Mecánica
						</a>
					</li>
					<li>
						<a href="#" className="text-white" id="entrenador">
							Entrenador Personal
						</a>
					</li>
					<li>
						<a href="#" className="text-white" id="belleza">
							Belleza
						</a>
					</li>
				</ul>
			</div>
			<div className="col-12 text-center mt-3">
				<h1 id="tituloIndexPulxe">Mandados</h1>
			</div>
			{store.pulxes.map((item, index) => {
				return (
					<div key={index}>
						<Pulxes
							key={index}
							nombre={item.nombre}
							categoria={item.categoria}
							pulxe={item.pulxe}
							provincia={item.provincia}
							distrito={item.distrito}
							canton={item.canton}
							añosEXP={item.añosEXP}
							numero={item.numero}
							calificacion={item.calificacion}
							id={index}
						/>
					</div>
				);
			})}
		</div>
	);
};
