import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-left greenPulseBG">
		<div className="container text-white">
			<div className="col-4 float-left">
				<ul className="list-unstyled">
					<li>
						<a
							className="text-white"
							href="https://www.debpicado.com/"
							target="_blank"
							rel="noopener noreferrer">
							Debora Picado
						</a>
					</li>
					<li>
						<a
							className="text-white"
							href="https://www.linkedin.com/in/eduardo-navarro-hernandez-328bab102/"
							target="_blank"
							rel="noopener noreferrer">
							Eduardo Navarro
						</a>
					</li>
					<li>
						<a
							className="text-white"
							href="https://www.linkedin.com/in/eduardoguido86/"
							target="_blank"
							rel="noopener noreferrer">
							Eduardo Guido
						</a>
					</li>
					<li>
						<a
							className="text-white"
							href="http://fractalescr.com/"
							target="_blank"
							rel="noopener noreferrer">
							Roy Mora
						</a>
					</li>
				</ul>
			</div>
			<div className="col-4 float-left pt-5">PROYECTO FINAL 4GEEKS 2021</div>
			<div className="col-4 float-left">
				<img src="https://i.postimg.cc/RFGmYH6R/logo-Vacio.png" className="img-fluid" />
			</div>
		</div>
	</footer>
);
