import axios from "../axios";

interface IParams {
    term: string;
    locale?: string;
    offset?: string;
    limit?: string;
}

export const searchSongs = async (params: IParams) =>
    await axios.get("/search", {
        params,
    });
