import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";
const register = (username, password) => {
  return axios.post(API_URL + "signup", {
    username,
    password,
  });
};

const login = (newUser) => {
  return axios
    .post(API_URL + "signin", newUser)
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = async () => {
  let auth =  {Authorization: 'Bearer ' + localStorage.getItem("accessToken")}
  console.log(auth)
  let response = await fetch("http://localhost:8080/api/users/loggedin", { headers: auth })
  response = response.json
  return response
}

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;