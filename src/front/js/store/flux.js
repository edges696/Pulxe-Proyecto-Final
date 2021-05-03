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
			pulxes: [
				{
					nombre: "ROBERTO GOMEZ B.",
					pulxe: "Jardinero",
					categoria: "Hogar",
					ubicacion: "heredia",
					añosEXP: "25",
					numero: "345687",
					calificacion: "5"
				},
				{
					nombre: "Juan GOMEZ B.",
					pulxe: "Herrero",
					categoria: "Mascotas",
					ubicacion: "San Jose",
					añosEXP: "30",
					numero: "345435",
					calificacion: "2"
				},
				{
					nombre: "Maicol GOMEZ B.",
					pulxe: "Pintor",
					categoria: "Belleza",
					ubicacion: "San Jose",
					añosEXP: "10",
					numero: "34534553",
					calificacion: "5"
				},
				{
					nombre: "Fran GOMEZ B.",
					pulxe: "Peon",
					categoria: "Mecanica",
					ubicacion: "Guanacaste",
					añosEXP: "1",
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
