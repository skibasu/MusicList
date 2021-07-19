import axios from "axios";
interface IHeaders {
    [key: string]: string | undefined;
}
const baseURL: string | undefined = process.env.REACT_APP_BACKEND_URL;
const headers: IHeaders = {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-host": process.env.REACT_APP_API_HOST,
};

const instance: any = axios.create({
    baseURL,
    headers,
});

export default instance;
