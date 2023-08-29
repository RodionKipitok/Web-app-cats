import axios from "axios";
import { creationMarkupSelect, getValueSelect, creationMarkupPage } from ".";


const API_URL = `https://api.thecatapi.com/v1/breeds`;
const API_KEY = 'live_XvL7eMGy8qInDWPM7d4KLJgy3oiCGwYagFOrPm7zfSdAPbzi6jtVxdAYQXX2zVQJ';

axios.defaults.headers.common["x-api-key"] = API_KEY;

export const getDataCats = async () => {

	try {
		const { data: dataAllcats } = await axios.get(API_URL);



		return dataAllcats;

	} catch (error) {
		console.error(error);
	};
};






export const getOneCat = async (catId) => {
	try {
		const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${catId}`);


     
		return data;

	} catch (error) {
		console.error(error);
	};

};

getDataCats();

