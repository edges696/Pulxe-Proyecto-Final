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
				const url = "https://3001-tan-porpoise-tasj15xn.ws-us03.gitpod.io/api/pulxes"; //url de backend
				const response = await fetch(url);
				const results = await response.json();
				setStore({ pulxes: results });
			},
			loadSitios: async () => {
				const url =
					"https://services.arcgis.com/LjCtRQt1uf8M6LGR/arcgis/rest/services/Provincias_CR/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"; //url de API
				const response = await fetch(url);
				console.log(response);
				const results = await response.json();
				setStore({ ubicaciones: results });
			}
		}
	};
};

export default getState;
