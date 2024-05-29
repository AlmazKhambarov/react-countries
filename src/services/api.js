import Axios from "axios";

export const BASE_URL = "https://restcountries.com/v3.1/";

export const axiosInstance = Axios.create({
  baseURL: BASE_URL,
});
export const API = {
    getCountries: () =>
    axiosInstance
      .get("/all")
      .then((res) => res.data),
      getCountryByName: (name) =>
      axiosInstance
        .get(`/name/${name}`)
        .then((res) => res.data),
}