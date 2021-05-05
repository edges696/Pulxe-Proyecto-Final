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
			pulxes: []
		},
		actions: {
			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			loadPulxes: async () => {
				const url = "https://3001-purple-snipe-7snkfggw.ws-us03.gitpod.io/api/pulxes"; //url de backend
				const response = await fetch(url);
				const results = await response.json();
				setStore({ pulxes: results });
			},
			loadSitios: async () => {
				const url = "https://ubicaciones.paginasweb.cr/provincias.json"; //url de API
				const response = await fetch(url);
				const results = await response.json();
				setStore({ ubicaciones: results });
			}
		}
	};
};

export default getState;
