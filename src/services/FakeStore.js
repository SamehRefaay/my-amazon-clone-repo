import axios from 'axios';

const fakeStoreApi = axios.create({
	baseURL: 'https://fakestoreapi.com',
	params: {},
});

export const getAllProducts = async () => {
	try {
		let data = await fakeStoreApi.get('/products').then(({ data }) => data);
		return data;
	} catch (error) {
		console.log(error);
	}
};
