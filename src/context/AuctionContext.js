import { createContext, useEffect, useState } from "react";

const AuctionContext = createContext();

export const AuctionProvider = ({ children }) => {
    
    // Condition to be false when loading is done.
    const [isLoading, setIsLoading] = useState (true);
    const [bids, setBids] = useState ([]);
    const [auctions, setAuctions] = useState([]);
    const [users, setUsers] = useState([    ]);

    // Deep copy / clone a json object, creates and returns an identical JSON object that was passed in.
    function createNew(object){
        let cloneObj = JSON.parse(JSON.stringify(object));
        return cloneObj;
    }

    // Getter / Setter auction object
    const [bid, setBid] = useState({
        bidId: 0,
        userId: 0,
        auctionId: 0,
        bidAmount: 0,
        timeStamp: 0
    });
    
    // Getter / Setter auction object
    const [auction, setAuction] = useState({
        auctionId: 0,
        userId: 0,
        bids: [],  // Change to bidId for relationship instead of aggregation
        startPrice: 0,
        endPrice: 0,
        productName: "",
        productInfo: "",
        productImgURL: ""
    });
   
    // Getter / Setter profile object
    const [profile, setProfile] = useState({
        userId: 0,
        firstName: "",
        lastName: "",
        address: "",
    }); 
    
    // Getter / Setter user object
    const [user, setUser] = useState({
        userId: 0,
        email: "",
        password: "",
        profile: {}, 
        auctions: []  
    });
    
    useEffect (() => {
        fetchUsers();
      }, []);

    // Get all users
    const fetchUsers = async () => {
        const res = await fetch("/users");
        const data = await res.json();
        
        console.log(data);  // DEBUG
        setUsers(data);
        setIsLoading(false);
    }

    // Client side auth until backend is up and running.
    const authUser = async (aUser) => {
        let usr = users.filter(fUser => fUser.email == aUser.email);
        // console.log(usr[0]);  // DEBUG
        // console.log(aUser);   // DEBUG

        // filtrera ut aUser.email == någon av alla Users
        if (aUser.email == usr[0].email && aUser.password == usr[0].password){
            console.log(usr[0].userId)
            console.log("User & Password Correct");
            localStorage.setItem("authed", "TRUE");
            localStorage.setItem('userId', usr[0].userId)
            console.log(localStorage)
        }
        else 
        {
            console.log("User or Password incorrect", aUser.email, aUser.password);
            localStorage.setItem("authed", "FALSE");
        }
            
        console.log("LocalStorage key authed: ", localStorage.getItem("authed"));  // DEBUG
    }
    
    // Adds a user to REST API
    const addUser = async (aUser) => {
        const res = await fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(aUser),
        });

    }

    return ( <AuctionContext.Provider
        value={{
            bid,        // bid object
            auction,    // auction object
            profile,    // profile object
            user,       // user object
            createNew,  // Hardcopy json object
            addUser,    // AddUser function
            authUser,   // auth user
            isLoading,   // Conditional when fetching data or not.
            users,
        }}
        >
            {children}
        </AuctionContext.Provider> );
}

export default AuctionContext;