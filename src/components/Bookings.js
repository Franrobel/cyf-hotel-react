import React, { useEffect, useState } from "react";
import Search from "../components/Search.js";
import SearchResults from "../components/SearchResults.js";
//import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]); // el array bookings de useState contiene el array fakebooking como no cambia estado no hace falta declarar segundo parametro
  const [searchVal, setsearchVal] = useState(null);
  const [loadingData, setLoadingData] = useState(false);
  console.log("loading data", loadingData);
  useEffect(() => {
    const getData = () => {
      fetch("https://cyf-react.glitch.me/delayed")
        .then(response => response.json())
        .then(data => {
          setBookings(data);
          setLoadingData(data);
          console.log("data", data);
        })
        .then(fetch("https://cyf-react.glitch.me/error"));
    };
    getData();
  }, []);

  const search = value => {
    console.info("TO DO!", searchVal);
    setsearchVal(value);

    console.log("bookings despues de filter", bookings); //
  };

  const filterBookings = searchVal
    ? bookings.filter(
        persona =>
          persona.firstName === searchVal || persona.surname === searchVal
      )
    : bookings;

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={filterBookings} />
        {!loadingData && (
          <p id="loading-data">THE CUSTOMER DATA IS LOADING, PLEASE WAIT</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;
