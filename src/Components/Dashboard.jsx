import axios from 'axios';
import React, { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [suc, setSuc] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get("https://password-reset-9pjf.onrender.com/dashboard")
          .then((res) => {
            if (res.data === "Success") {
              setSuc("Succeded OK");
            } else {
              navigate("/");
            }
          })
          .catch((err) => console.log(err));
    }, [])

    return (
      <div>
            <h2>Dashboard</h2>
            <p>{suc}</p>
      </div>
    );
};

export default Dashboard;