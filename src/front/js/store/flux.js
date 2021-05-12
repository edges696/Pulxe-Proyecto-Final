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
<<<<<<< HEAD
				const url = "https://3001-olive-earthworm-eho6taex.ws-us04.gitpod.io/api/pulxes"; //url de backend
=======
				const url = "https://3001-apricot-dog-ur57rk6z.ws-us04.gitpod.io/api/pulxes"; //url de backend
>>>>>>> 53736f2d89163fcb39fca74d8e14107fcf85ffbc
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
