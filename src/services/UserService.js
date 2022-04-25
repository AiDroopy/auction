import axios from 'axios';
const API_URL_TEST = "http://localhost:8080/api";

class UserService{

    getAllUsers(){
        return axios.get(`${API_URL_TEST}/users/all`)
    }

    getUserById(id){
        return axios.get(`${API_URL_TEST}/users/user/${id}`)
    }

    createUser(newUser){
        return axios.post(`${API_URL_TEST}/auth/signup`, newUser)
    }

}

export default new UserService();