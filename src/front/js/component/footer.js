import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-left greenPulseBG">
		<div className="container text-white">
			<div className="container">
				<div className="row">
					<div className="col">
						<ul className="list-unstyled">
							<li>
								<p className="font-weight-bold">Proyecto Final 4Geeks Academy</p>
							</li>
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
					<div className="col">
						<p className="font-weight-bold">Sé parte del Equipo Pulxe</p>
						<Link className="btn btn-outline-light" to="/registro">
							Registrarme
						</Link>
					</div>
					<div className="col">
						<h5 className="encabezado text-center">Seguínos en:</h5>
					</div>
					<div className="col">
						{" "}
						<img src="https://i.postimg.cc/RFGmYH6R/logo-Vacio.png" className="img-fluid" />
						<i className="fab fa-facebook-square fa-2x ml-1 mr-2" />
						<i className="fab fa-twitter-square fa-2x mr-2" />
						<i className="fab fa-youtube-square fa-2x ml-1" />
						<i className="fab fa-instagram-square fa-2x ml-2" />
					</div>
					<div className="col">
						<h5 className="encabezado text-center">Somos</h5>
					</div>
					<div className="col">
						<a href="https://www.esencialcostarica.com/">
							<img
								src="https://www.esencialcostarica.com/wp-content/uploads/2018/01/logo-footer.png"
								width="150"
								height="70"
							/>
						</a>
						<br />
						<br />
						<a href="https://www.cinde.org/en">
							<img
								src="https://becasmicitt.com/static/media/cinde-v2-logo.c3bd6e5a.png"
								width="165"
								height="65"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
);
