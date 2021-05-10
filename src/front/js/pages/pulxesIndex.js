import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Pulxes } from "../component/pulxes";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const PulxesIndex = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPulxes();
	});

	let filtroPulxe = e => {
		let title = e.target.text;
		document.getElementById("tituloIndexPulxe").innerHTML = title;
		let count = store.pulxes.length;
		for (let i = 0; i < count; i++) {
			let title = e.target.text;
			let idCount = document.getElementById("pulxe" + i).classList.value;
			let idCambio = document.getElementById("pulxe" + i);

			if (document.querySelector("#pulxe" + i).classList.contains(title)) {
				console.log("si");
				idCambio.classList.add("d-block");
				idCambio.classList.remove("d-none");
			} else {
				console.log("no");
				idCambio.classList.add("d-none");
				idCambio.classList.remove("d-block");
			}
		}
	};

	return (
		<div>
			<div className="col-12 p-0 bluePulxeBG py-4 text-center">
				<ul className="list-unstyled listFilter">
					<li>
						<a href="#" className="text-white" id="hogar" onClick={filtroPulxe}>
							Hogar
						</a>
					</li>
					<li>
						<a href="#" className="text-white" id="mascotas" onClick={filtroPulxe}>
							Mascotas
						</a>
					</li>
					<li>
						<a href="#" className="text-white" id="mandados" onClick={filtroPulxe}>
							Mandados
						</a>
					</li>
					<li>
						<a href="#" className="text-white" id="mecanica" onClick={filtroPulxe}>
							Mecánica
						</a>
					</li>
					<li>
						<a href="#" className="text-white" id="entrenador" onClick={filtroPulxe}>
							Fitness
						</a>
					</li>
					<li>
						<a href="#" className="text-white" id="belleza" onClick={filtroPulxe}>
							Belleza
						</a>
					</li>
				</ul>
			</div>
			<div className="col-12 text-center mt-3">
				<h1 id="tituloIndexPulxe">Todos los Pulxes</h1>
			</div>
			{store.pulxes.map((item, index) => {
				return (
					<div id={"pulxe" + index} key={index} className={item.categoria + " pulxeroy"}>
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
