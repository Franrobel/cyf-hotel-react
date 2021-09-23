import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "../components/SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  const [bookings, setBookings] = useState([]); // el array bookings de useState contiene el array fakebooking como no cambia estado no hace falta declarar segundo parametro
  console.log(bookings);

  useEffect(() => {
    console.log("Puedo, Todo se va a acomodar");

    const getData = () => {
      fetch("https://cyf-react.glitch.me")
        .then(response => response.json())
        .then(data => {
          setBookings(data);
          console.log("data en API", data);
        });
    };
    getData();
  }, []);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
