const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			ubicaciones: [],
			pulxes: [
				{
					nombre: "ROBERTO GOMEZ B.",
					pulxe: "Jardinero",
					categoria: "Hogar",
					provincia: "heredia",
					canton: "Aserri",
					distrito: "Barrio Colegio",
					añosEXP: "25",
					descripcion:
						"Los carpinteros utilizan sus habilidades para construir estructuras y accesorios, tales como ventanas, techos, pisos, paredes y puertas de madera y otras estructuras de madera. Usan una gran variedad de herramientas manuales y eléctricas para cortar, dar forma y ensamblar estructuras de madera",
					numero: "345687",
					calificacion: "5"
				},
				{
					nombre: "Juan GOMEZ B.",
					pulxe: "Herrero",
					categoria: "Mascotas",
					provincia: "San Jose",
					canton: "Aserri",
					distrito: "Barrio Colegio",
					añosEXP: "30",
					descripcion:
						"Los zapateros confeccionan, modifican y reparan calzado y artículos similares como bolsos, cinturones o participan en algunos de los procesos de fabricación de estos productos. Participan en la fabricación de zapatos y artículos similares",
					numero: "345435",
					calificacion: "2"
				},
				{
					nombre: "Maicol GOMEZ B.",
					pulxe: "Pintor",
					categoria: "Belleza",
					provincia: "San Jose",
					canton: "Aserri",
					distrito: "Barrio Colegio",
					añosEXP: "10",
					descripcion:
						"El oficio de soldador consiste en unir sólidamente dos cuerpos o dos piezas para obtener un resultado homogéneo, rígido y estanco. La soldadura se puede hacer entre metales, mediante la fusión de las piezas o de un metal añadido, o entre materiales termoplásticos",
					numero: "34534553",
					calificacion: "5"
				},
				{
					nombre: "Fran GOMEZ B.",
					pulxe: "Peon",
					categoria: "Mecanica",
					provincia: "Guanacaste",
					canton: "Aserri",
					distrito: "Barrio Colegio",
					añosEXP: "1",
					descripcion:
						"Un peón es un tipo de trabajador que posee una escasa especialización. Por lo general, el peón es aquel que inicia su actividad laboral, que no tiene una cualificación específica y que recibe un salario modesto",
					numero: "3425455",
					calificacion: "4"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			}
			// loadPulxes: async () => {
			// 	const url = "https://swapi.dev/api/people/"; url de backend
			// 	const response = await fetch(url);
			// 	const data = await response.json();
			// 	setStore({ pulxes: data.results });
			// }
		}
	};
};

export default getState;
