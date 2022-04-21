import axios from 'axios';

const API_URL_TEST = "http://localhost:8080/api";

class UserService{

    getAllUsers(){
        return axios.get(`${API_URL_TEST}/users`)
    }
}

export default new UserService();