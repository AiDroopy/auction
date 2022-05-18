import axios from 'axios';
const API_URL_TEST = "http://localhost:8080/api";

    const getUserById = (id) => {
        return axios.get(`${API_URL_TEST}/users/user/${id}`)
    }

    const createUser = (newUser) => {
        return axios.post(`${API_URL_TEST}/auth/signup`, newUser)
    }

const UserService = {
    getUserById,
    createUser
}

export default UserService;