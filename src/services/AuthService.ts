import axios from 'axios';
import { MAIN_URL } from './config';
import { IuserLogin, IuserRegister } from '../interfaces';
class AuthService {
    // LOGIN SERVICE
    login = (data: IuserLogin) => {
        return axios.post(`${MAIN_URL}/login`, { ...data }).then((response) => {
            if (response.status) {
                localStorage.setItem('token', response.data.token);
            }
            console.log(response)
            return response.data;
        }).catch(error => {
            // Handle error
            return(error);
          })
    };
    register = (data: IuserRegister) => {
        return axios
            .post(`${MAIN_URL}/register`, { ...data })
            .then((response) => {
                if (response.status) {
                    localStorage.setItem('token', response.data.token);
                }
               
                return response.data;
            }).catch(error => {
                // Handle error
                return(error);
              })
    };
    resetPassword = (email: string) => {
        return axios
            .post(`${MAIN_URL}/resetPassword`, { email })
            .then((response) => {
                if (response.status) {
                    localStorage.setItem('token', response.data.token);
                }
                return response.data;
            });
    };
    // LOGOUT SERVICE
    logout = () => {
        localStorage.removeItem('token');
    };
}

export default new AuthService();
