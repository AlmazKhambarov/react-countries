import React, { useEffect, useState } from "react";
import { API } from "../services/api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CountryDetail from "../features/country-detail";
import { locationIcon, populationIcon, squareIcon } from "../assets/images";

import "../styles/home.css";
const CountriesDetail = () => {
  const [country, setCountry] = useState();
  const params = useParams();

  const { data, isLoading, isError} = useQuery(
    "getSingleCountry",
    async () => {
      const response = await API.getCountryByName(params?.id);
      return response[0];
    },
    {
      onSuccess: (data) => {
        console.log(data);
        setCountry(data);
      },
      onError: (error) => {
        console.log(error.message);
      },
    }
    );
    if(isError){
      return <p>{isError}</p>
    }
  if(isLoading){
    return <p>Loading....</p>
  }
  return (
    <div className='container'>
        <CountryDetail />
        <div className="details">
        <div className="detail_card">
          <div className='img_icon'>
            <img src={locationIcon} />
          </div>
          <div className="detail_info">
            <p className="detail_title">{country?.name?.common}</p>
            <p className="detail_desc">{country?.capital[0]}</p>
          </div>
        </div>
        <div className="detail_card">
          <div className='img_icon'>
            <img src={populationIcon} />
          </div>
          <div className="detail_info">
            <p className="detail_title"> Population</p>
            <p className="detail_desc">{country?.population}</p>
          </div>
        </div>
        <div className="detail_card">
          <div className='img_icon'>
            <img src={squareIcon} />
          </div>
          <div className="detail_info">
            <p className="detail_title">Square</p>
            <p className="detail_desc">{country?.area}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesDetail;
