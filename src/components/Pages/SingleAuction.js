import React, {useState}from 'react'
import {useParams} from 'react-router-dom'
import AuctionService from './'

const SingleAuction = () => {

    const [auction, setAuction] = useState()

    const {id} = useParams();

    React.useEffect(() => {
        AuctionService.getAuction(id).then(setAuction)
        }, [id]
    
  return (
    <div>{auction.id}</div>
  )
}
export default SingleAuction;
