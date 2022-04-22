import axios from 'axios';
const API_URL_TEST = "http://localhost:8080/api/auth";

class AuthService{

    login(newUser){
        return axios.post(`${API_URL_TEST}/signin`, newUser)
    }
}

export default new AuthService();