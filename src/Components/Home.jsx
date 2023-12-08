import React, { useEffect } from 'react';
import axios from 'axios';

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
    .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2>Home page</h2>
        </div>
    )
};

export default Home;