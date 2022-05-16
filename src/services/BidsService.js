import axios from "axios";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const API_URL_BIDS = "http://localhost:8080/api/bids";

  // Gets all bids from database, should not be implemented. Only for tests
  const getAllBids = () => {
    return axios.get(`${API_URL_BIDS}/all`);
  }
  // Gets specific
  const findById = (bidId) =>{
    return axios.get(`${API_URL_BIDS}/${bidId}`);
  }
  // Gets all bids belonging to a user
  const getUserBids = (userId)=> {
    return axios.get(`${API_URL_BIDS}/user/${userId}`);

  }
  // Gets all bids belonging to a Auction
  const getAuctionBids = (auctionId) => {
    return axios.get(`${API_URL_BIDS}/auction/${auctionId}`);
  }

  // Create a new bid
  const createBid = (bid) => { 
    return axios.post(`${API_URL_BIDS}/create`,bid)
  }


const BidService = {
  getAllBids,
  findById,
  getUserBids,
  getAuctionBids,
  createBid
};

export default BidService;