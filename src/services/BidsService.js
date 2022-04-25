import axios from "axios";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const API_URL_BIDS = "http://localhost:8080/api/bids";

class BidsService {
  // Gets all bids from database, should not be implemented. Only for tests
  getAllBids() {
    return axios.get(`${API_URL_BIDS}/all`);
  }
  // Gets specific
  findById(bidId){
    return axios.get(`${API_URL_BIDS}/${bidId}`);
  }
  // Gets all bids belonging to a user
  getUserBids(userId){
    return axios.get(`${API_URL_BIDS}/user/${userId}`);

  }
  // Gets all bids belonging to a Auction
  getAuctionBids(auctionId){
    return axios.get(`${API_URL_BIDS}/auction/${auctionId}`);
  }

  // Create a new bid
  createBid(bid){
    return axios.post(`${API_URL_BIDS}/create`,bid)
  }

}

export default new BidsService();