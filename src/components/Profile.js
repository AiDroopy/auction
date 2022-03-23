import { useContext } from "react";
import AuctionContext from "../context/AuctionContext";

const Profile = () => {
  
    const { users } = useContext(AuctionContext);

    return (
      users.map(function(user){
        return `${user.email} ${user.userId}`;
    })
  )
}

export default Profile;
