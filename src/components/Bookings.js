import React, { useEffect, useState } from "react";
import Search from "../components/Search.js";
import SearchResults from "../components/SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]); // el array bookings de useState contiene el array fakebooking como no cambia estado no hace falta declarar segundo parametro
  const [searchVal, setsearchVal] = useState("");
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed/")
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          console.log("data.error", data.error);
          setError(data.error);
          throw new Error(data.error);
        } else {
          const bookings = searchVal
            ? data.filter(
                persona =>
                  persona.firstName === searchVal ||
                  persona.surname === searchVal
              )
            : data;
          setBookings(bookings);
          setLoadingData(false);
        }
      })
      .catch(error => {
        console.log(error);
        setLoadingData(false);
      });
  }, [searchVal]);
  const search = value => {
    setsearchVal(value);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loadingData ? (
          <p id="loading-data">The Data is loading, Please wait</p>
        ) : (
          <SearchResults results={bookings} />
        )}
        {error ? <p>{error}</p> : null}
      </div>
    </div>
  );
};

export default Bookings;
