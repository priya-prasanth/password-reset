import React, { useEffect } from 'react';
import  axios  from "axios";
import { Link } from "react-router-dom";
import "./Signup.css"


const Home = () => {
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://localhost:4000/home")
            .then(result => {
                console.log(result)
                if (result.data !== "Success") {
                    navigate("/login");
                    }
    })
    .catch((err) => console.log(err))
    }, [])
  
    return (
      <div>
        <h2>Home page</h2>
        <Link to="/register">
          <button className="btn btn-default border w-30  text-decoration-none">
            Register
          </button>
          </Link>
      </div>
    );
};

export default Home;