import axios from "axios";
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const URL_API = "http://localhost:5099/api/Destination/"

const getAllDestinations = () => {
    return axios.get(URL_API)
}

const DeliveryService ={
    getAllDestinations
}

export default DeliveryService;