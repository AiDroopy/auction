import axios from "axios";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const API_URL = "http://localhost:8080/api/auction"

    const getAuctions = () => {
        return axios.get(`${API_URL}/all`)
    }
    
    const deleteAuction = (id) => {
        return axios.delete(`${API_URL}/delete/${id}`)
    }

    const createAuction = (auction) =>{
        return axios.post(`${API_URL}/create`, auction)
    }


    const AuctionService = {
    getAuctions,
    deleteAuction,
    createAuction
  };

export default AuctionService;