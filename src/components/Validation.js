/*
A function that returns error if some values statement are true when user are signing up. 
*/
const validation = (newUser) => {

    let errors={};
 

    /*
    if(!newUser.fullname){
        errors.fullname="Name is required."
    }*/

    // if email is empty.... else if email don't contain . signs or @ sign 
    if (!newUser.email){
        errors.email="Email is required"
    } else if(!/\S+@\S+\.\S+/.test(newUser.email)){
        errors.email="Email is invalid."
    }

    // vi kan lägga till password får inte innehålla ex: $£$£$[{[£]}]
    if(!newUser.password){
        errors.password="Password is required."
    } else if(newUser.password.length < 5){
        errors.password="Password must be more than five characters"
    }
    
  
    return errors;
}

export default validation;
