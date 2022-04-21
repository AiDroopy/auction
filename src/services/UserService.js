import axios from 'axios';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const API_URL_TEST = "http://localhost:8080/api";

class UserService{

    getAllUsers(){
        return axios.get(`${API_URL_TEST}/users`)
    }
}

export default new UserService();