import React from 'react';


const LoginTest = () => {

    const { user, createNew, authUser } = useContext (AuctionContext);  // get some stuff from AuctionContext
    
    const [newUser, setNewUser] = useState(createNew(user));
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    
    const handleChange = (event) => {
        setNewUser({
          ...newUser,
          [event.target.name]: event.target.value,

      })

      const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(newUser));
        setDataIsCorrect(true);
        authUser(newUser);
        if(errors.length === 0 && dataIsCorrect){
            setFormIsSubmitted(true);
        }
      };
  }


    return (
            <div className="container">
              <div className="app-wrapper">
                <div>
                  <h2 className="title">Login</h2>
                </div>
                <form className="form-wrapper">
                  
                  <div className="email">
                    <label className="label">Username: </label>
                    <input
                      className="input"
                      type="email"
                      name="username"
                      value={newUser.username}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
        
                  <div className="password">
                    <label className="label">Password: </label>
                    <input
                      className="input"
                      type="password"
                      name="password"
                      value={newUser.password}
                      onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                  </div>
                  <div>
        
                    <button className="submit" onClick={handleFormSubmit}>
                      Login
                    </button>
        
                  </div>
                </form>
              </div>
            </div>
          );
        
}

export default LoginTest;