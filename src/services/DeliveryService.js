import axios from "axios";
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const API_URL = "http://localhost:5099/api/Delivery/"

const getAllDestinations = () => {
    return axios.get(API_URL)
}

// Samma som nedan
function deliver(address){
    return axios.post(`${API_URL}`, address)
}

const getDeliveryInfo = (address) =>{
    //console.log("This is Delivery Service")
    //console.log(address);
    return axios.post(`${API_URL}`, address)
}

const DeliveryService ={
    getAllDestinations,
    deliver,
    getDeliveryInfo

}

export default DeliveryService;