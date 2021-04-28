import React, { useContext, useDebugValue } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid p-0">
			<div className="row imgPrincipal p-0 m-0">
				<div className="col-6" />
				<div className="col-6 text-white text-center pt-5">
					<h2 data-aos="zoom-in" className="pt-5">
						Pulxe hace tu vida más fácil, conectándote con decenas de servicios pensados a tu medida. Sin
						salir de casa, te conectamos con asistentes especializados en: tareas del hogar, mascotas,
						mandados, mecánica, entrenamiento personal y belleza.
					</h2>
				</div>
			</div>
			<div className="col-12 text-center mb-5">
				<div className="col-12 text-center mt-5">
					<h1 data-aos="zoom-in">Como Funciona</h1>
				</div>
				<div className="row my-5">
					<div className="col-3" data-aos="flip-left" data-aos-delay="50">
						<div className="col-12">
							<div className="countRounded mb-5">1</div>
						</div>
						<div className="col-12">
							<h3>Cree una Cuenta</h3>
						</div>
					</div>
					<div className="col-3" data-aos="flip-left" data-aos-delay="50">
						<div className="col-12">
							<div className="countRounded mb-5">2</div>
						</div>
						<div className="col-12">
							<h3>Busque un Pulxe</h3>
						</div>
					</div>
					<div className="col-3" data-aos="flip-left" data-aos-delay="50">
						<div className="col-12">
							<div className="countRounded mb-5">3</div>
						</div>
						<div className="col-12">
							<h3>Solicitar Pulxe</h3>
						</div>
					</div>
					<div className="col-3" data-aos="flip-left" data-aos-delay="50">
						<div className="col-12">
							<div className="countRounded mb-5">4</div>
						</div>
						<div className="col-12">
							<h3>Calificar</h3>
						</div>
					</div>
				</div>
				<div className="col-12 text-center">
					<Link to="/" className="btn btn-danger" data-aos="zoom-in">
						Crear Mi Cuenta
					</Link>
				</div>
			</div>
			<div className="row p-0 m-0 text-center">
				<div className="col-6 float-left greyMedium">
					<p data-aos="zoom-in">Que es un PULXE</p>
				</div>
				<div className="col-6 float-left greyLight">
					<p data-aos="fade-up">dkfjdkljfgkldsjfkljsdkljf</p>
				</div>
			</div>
			<div className="bluePulxeBG row p-0 m-0 py-5 text-white text-center">
				<div className="col-12 mb-3">
					<h1 className="text3r" data-aos="zoom-in">
						Que puedes encontar
					</h1>
				</div>
				<div className="row w-100 my-3">
					<div className="col-4" data-aos="flip-left" data-aos-delay="100">
						<div className="col-12 text-center mb-3">
							<i className="fas fa-home" />
						</div>
						<div className="col-12 mb-3">
							<h3>Hogar</h3>
						</div>
						<div className="col-12">jkldjfkldjkldjkldjkljdkljsdl</div>
					</div>
					<div className="col-4" data-aos="flip-left" data-aos-delay="100">
						<div className="col-12 text-center mb-3">
							<i className="fas fa-dog" />
						</div>
						<div className="col-12 mb-3">
							<h3>Mascotas</h3>
						</div>
						<div className="col-12">jkldjfkldjkldjkldjkljdkljsdl</div>
					</div>
					<div className="col-4" data-aos="flip-left" data-aos-delay="100">
						<div className="col-12 text-center mb-3">
							<i className="fas fa-motorcycle" />
						</div>
						<div className="col-12 mb-3">
							<h3>Mandados</h3>
						</div>
						<div className="col-12">jkldjfkldjkldjkldjkljdkljsdl</div>
					</div>
				</div>
				<div className="row w-100 my-3">
					<div className="col-4" data-aos="flip-left" data-aos-delay="100">
						<div className="col-12 text-center mb-3">
							<i className="fas fa-cogs" />
						</div>
						<div className="col-12 mb-3">
							<h3>Mecanica</h3>
						</div>
						<div className="col-12">jkldjfkldjkldjkldjkljdkljsdl</div>
					</div>
					<div className="col-4" data-aos="flip-left" data-aos-delay="100">
						<div className="col-12 text-center mb-3">
							<i className="fas fa-running" />
						</div>
						<div className="col-12 mb-3">
							<h3>Entrenador Personal</h3>
						</div>
						<div className="col-12">jkldjfkldjkldjkldjkljdkljsdl</div>
					</div>
					<div className="col-4" data-aos="flip-left" data-aos-delay="100">
						<div className="col-12 text-center mb-3">
							<i className="fas fa-spa" />
						</div>
						<div className="col-12 mb-3">
							<h3>Belleza</h3>
						</div>
						<div className="col-12">jkldjfkldjkldjkldjkljdkljsdl</div>
					</div>
				</div>
			</div>
			<div className="row p-0 m-0 text-center">
				<div className="col-6 float-left greyMedium">
					<p data-aos="zoom-in">Como ser un PULXE</p>
				</div>
				<div className="col-6 float-left greyLight">
					<p data-aos="fade-up">dkfjdkljfgkldsjfkljsdkljf</p>
					<div className="col-12">
						<Link to="/" className="btn btn-danger" data-aos="zoom-in">
							Publicar mi servicio
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
