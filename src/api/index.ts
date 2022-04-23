import axios from "axios";

class Api {
    url: string;
    constructor(url: string) {
        this.url = url;
    }
    getCategories = async (params?: any) => {
        const { data } = await axios.get(`${this.url}/categories`, { params: params });
        return data;
    }
    getImages = async (params?: any) => {
        const { data } = await axios.get(`${this.url}/images/search`, { params: { limit: defaultLimit, ...params } });
        return data;
    }
}


const MAIN_URL = process.env.REACT_APP_API_URL;
export const defaultLimit = 10;

const api = new Api(`${MAIN_URL}`);
export default api;