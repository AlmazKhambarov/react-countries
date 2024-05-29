import React, { useState } from "react";
import "../styles/global.css";
import { useQuery } from "react-query";
import { API } from "../services/api";
import { Link } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
  const [countriyes, setCountries] = useState([]);
  const { data, isLoading } = useQuery(
    "country",
    async () => {
      const response = await API.getCountries();
      return response;
    },
    {
      onSuccess: (data) => {
        console.log(data);
        setCountries(data);
      },
      onError: (error) => {
        console.log(error.message);
      },
    }
  );
  if(isLoading){
    return <p>Loading....</p>
  }
  console.log(isLoading)

  return (
    <div className='container'>
      <div className='list'>
        {countriyes?.map((el, idx) => (
          <div className='card' key={idx}>
            <Link  to={`/countries/${el.name.common}`}>
              <p>  {el.name.common}</p>
              <div className="card_img"> 
                <img src={el.flags?.svg} alt="#"/>

                </div>  
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
