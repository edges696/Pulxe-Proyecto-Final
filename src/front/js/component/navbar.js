import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar greenPulseBG sticky-top">
			<Link to="/" className="col-3">
				<img className="img-fluid" src="https://i.postimg.cc/bwcp58Vs/logo.png" />
			</Link>
			<div className="ml-auto col-9 text-center">
				<Link className="text-white nav-item ml-3" to="/">
					Inicio
				</Link>
				<Link className="text-white nav-item ml-3" to="/pulxesIndex">
					Pulxes
				</Link>
				<Link className="text-white nav-item ml-3" to="/crearCuenta">
					Crear Cuenta
				</Link>
				<Link className="text-white nav-item ml-3" to="/login">
					Ingresar
				</Link>
			</div>
		</nav>
	);
};
