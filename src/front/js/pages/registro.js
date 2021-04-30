import React, { useContext, useDebugValue } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Registro = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div>
				<h1>Registrarme</h1>
			</div>
			<div className="container-fluid p-0">
				<div className="input-group input-group-sm mb-3">
					<span className="input-group-text" id="inputGroup-sizing-sm">
						Nombre
					</span>
					<input
						type="text"
						className="form-control"
						aria-label="Sizing example input"
						aria-describedby="inputGroup-sizing-sm"
					/>
				</div>
			</div>
		</div>
	);
};
