import axios from 'axios';
import { List } from '../state/appStateReducer';
import MAIN_URL from './config';

const token = localStorage.getItem('token');

class TrelloService {
    authAxios = axios.create({
        baseURL: MAIN_URL,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    save = (payload: { lists: List[] }) => {
        return this.authAxios
            .post<List[]>(`/save`, payload)
            .then((response) => response);
    };

    load = () => {
        return this.authAxios.get<List[]>(`/load`).then((response) => {
            return response.data;
        });
    };
}

export default new TrelloService();
