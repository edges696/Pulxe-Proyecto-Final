import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar greenPulseBG mb-3 sticky-top">
			<Link to="/" className="col-3">
				<img className="img-fluid" src="https://i.postimg.cc/bwcp58Vs/logo.png" />
			</Link>
			<div className="ml-auto col-9 text-center">
				<Link className="text-white nav-item ml-3" to="/">
					Home
				</Link>
				<Link className="text-white nav-item ml-3" to="/">
					Login
				</Link>
				<Link className="text-white nav-item ml-3" to="/">
					Register
				</Link>
			</div>
		</nav>
	);
};
