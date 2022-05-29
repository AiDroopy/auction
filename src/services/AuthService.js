import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";
const register = (username, password) => {
  return axios.post(API_URL + "signup", {
    username,
    password,
  });
};

const login = async (newUser) => {
  return axios
    .post(API_URL + "signin", newUser)
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        //console.log(localStorage.getItem("user");
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  
};

const getCurrentUser = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"))
  return currentUser
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;