import axios from "axios";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const API_URL = "http://localhost:8080/api/auction"

class AuctionService{

    getAuctions(){
        return axios.get(`${API_URL}/all`)
    }

    deleteAuction(id){
        axios.delete(`${API_URL}/delete/${id}`)
    }

    createAuction(auction){
        return axios.post(`${API_URL}/create`, auction)
    }

}

export default new AuctionService();