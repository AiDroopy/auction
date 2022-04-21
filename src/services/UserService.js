import axios from 'axios';
const API_URL_TEST = "http://localhost:8080/api/users";

class UserService{

    getAllUsers(){
        return axios.get(`${API_URL_TEST}/all`)
    }
}

export default new UserService();