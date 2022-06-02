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

    const getAuction = async (id) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`)
            console.log(response.data)
                return response.data
        } catch (err) {
            console.error(err)
        }
    }

const AuctionService = {
    getAuctions,
    deleteAuction,
    createAuction,
    getAuction
  };
    
export default AuctionService;