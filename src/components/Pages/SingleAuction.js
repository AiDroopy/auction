import React, {useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import AuctionService from '../../services/AuctionService'

const SingleAuction = () => {

    const [auction, setAuction] = useState([])

    const {id} = useParams();

    useEffect(() => {
        AuctionService.getAuction(id).then(setAuction)
        }, []);
    
    return (
      <div>{auction.id}</div>
    )
}

export default SingleAuction;
