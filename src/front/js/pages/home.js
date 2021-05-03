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
					<h1 data-aos="zoom-in">¿Cómo Funciona?</h1>
				</div>
				<div className="row my-5">
					<div className="col-3" data-aos="flip-left" data-aos-delay="50">
						<div className="col-12">
							<div className="countRounded mb-5">1</div>
						</div>
						<div className="col-12">
							<h3>Cree una Cuenta</h3>
							<p>
								Crear una cuenta en Pulxe es totalmente gratis y te permitirá encontar un servicio a tu
								medida, entre todos los servicios que publican nuestros Pulxes
							</p>
						</div>
					</div>
					<div className="col-3" data-aos="flip-left" data-aos-delay="50">
						<div className="col-12">
							<div className="countRounded mb-5">2</div>
						</div>
						<div className="col-12">
							<h3>Busque un Pulxe</h3>
							<p>
								Todos los días se publican servicios nuevos y cerca de tu localidad. Una vez que hayas
								creado tu cuenta gratuita, puedes buscar en toas nuestras categorías
							</p>
						</div>
					</div>
					<div className="col-3" data-aos="flip-left" data-aos-delay="50">
						<div className="col-12">
							<div className="countRounded mb-5">3</div>
						</div>
						<div className="col-12">
							<h3>Solicitar Pulxe</h3>
							<p>
								Una vez que ya hayas encontrato al Pulxe de tu interés, puedes contactarlo mediante sus
								datos o directamente en la plataforma
							</p>
						</div>
					</div>
					<div className="col-3" data-aos="flip-left" data-aos-delay="50">
						<div className="col-12">
							<div className="countRounded mb-5">4</div>
						</div>
						<div className="col-12">
							<h3>Calificar</h3>
							<p>
								Una vez que el servicio haya sido finalizado, no olvide alificar a su Pulxe para que el
								resto de la comunidad tenga una idea más clara de lo que puede esprar
							</p>
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
					<p data-aos="zoom-in">¿Qué es un PULXE?</p>
				</div>
				<div className="col-6 float-left greyLight">
					<p data-aos="fade-up">
						Un Pulxe, es una persona que te ayuda en tus necesidades cotidianas, bridandote asistencia
						personalizada en labores y servicios ocacionales en tu hogar u oficina
					</p>
				</div>
			</div>
			<div className="bluePulxeBG row p-0 m-0 py-5 text-white text-center">
				<div className="col-12 mb-3">
					<h1 className="text3r" data-aos="zoom-in">
						¿Qué puedes encontar?
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
						<div className="col-12">
							Limpieza, reparación de equipo de cómputo, pintura, reparación de goteras o fontanería son
							solo algunos de los servicios que puedes encontrar en esta categoría
						</div>
					</div>
					<div className="col-4" data-aos="flip-left" data-aos-delay="100">
						<div className="col-12 text-center mb-3">
							<i className="fas fa-dog" />
						</div>
						<div className="col-12 mb-3">
							<h3>Mascotas</h3>
						</div>
						<div className="col-12">
							En esta categoría puedes encontar todo lo que tu mascota necesita, desde cuidadores,
							paseadores, peluquería canina o entrenamiento a domicilio,
						</div>
					</div>
					<div className="col-4" data-aos="flip-left" data-aos-delay="100">
						<div className="col-12 text-center mb-3">
							<i className="fas fa-motorcycle" />
						</div>
						<div className="col-12 mb-3">
							<h3>Mandados</h3>
						</div>
						<div className="col-12">
							En ocaciones es necesario enviar un documento o recoger algún pedido, para eso puede contar
							con uno de nuestros Pulxe cerca de su ubicación
						</div>
					</div>
				</div>
				<div className="row w-100 my-3">
					<div className="col-4" data-aos="flip-left" data-aos-delay="100">
						<div className="col-12 text-center mb-3">
							<i className="fas fa-cogs" />
						</div>
						<div className="col-12 mb-3">
							<h3>Mecánica</h3>
						</div>
						<div className="col-12">
							Llevamos hasta tu casa Pulxes que ye ayudan con rayaduras, cambio de aceite, lavado a
							domicilio, lavado de paicería, llevar el carro al taller o a RTV
						</div>
					</div>
					<div className="col-4" data-aos="flip-left" data-aos-delay="100">
						<div className="col-12 text-center mb-3">
							<i className="fas fa-running" />
						</div>
						<div className="col-12 mb-3">
							<h3>Entrenador Personal</h3>
						</div>
						<div className="col-12">
							En Pulxe puedes encontrar a personas espcializadas en dar entrenamientos fisicos a domicilio
						</div>
					</div>
					<div className="col-4" data-aos="flip-left" data-aos-delay="100">
						<div className="col-12 text-center mb-3">
							<i className="fas fa-spa" />
						</div>
						<div className="col-12 mb-3">
							<h3>Belleza</h3>
						</div>
						<div className="col-12">
							Si está buscando un corte de cabello, manicure, pedicure o maquillaje profesional, en esta
							categoría puede encontrar a un Pulxe cerca de su ubicación
						</div>
					</div>
				</div>
			</div>
			<div className="row p-0 m-0 text-center">
				<div className="col-6 float-left greyMedium">
					<p data-aos="zoom-in">¿Cómo ser un PULXE?</p>
				</div>
				<div className="col-6 float-left greyLight">
					<p data-aos="fade-up">
						Si es un pulseador o pulseadora y tiene un servicio ocacional que ofrecer, esta es la plataforma
						que estaba buscando para llegar a más clientes. Pulxe es totlamente gratuito!
					</p>
					<div className="col-12">
						<Link to="/registro" className="btn btn-danger" data-aos="zoom-in">
							Publicar mi servicio
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
