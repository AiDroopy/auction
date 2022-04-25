import axios from "axios";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const API_URL_BIDS = "http://localhost:8080/api/bids";

class BidsService {
  getAllBids() {
    return axios.get(`${API_URL_BIDS}/all`);
  }
  findById(bidId){
    return axios.get(`${API_URL_BIDS}/${bidId}`);
  }
  getUserBids(userId){
    return axios.get(`${API_URL_BIDS}/user/${userId}`);

  }
  getAuctionBids(auctionId){
    return axios.get(`${API_URL_BIDS}/auctin/${auctionId}`);
  }

  createBid(bid){
    return axios.post(`${API_URL_BIDS}/create`,bid)
  }

}

export default new BidsService();