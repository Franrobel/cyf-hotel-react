import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "../components/SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  const [bookings, setBookings] = useState(FakeBookings); // el array bookings de useState contiene el array fakebooking como no cambia estado no hace falta declarar segundo parametro
  console.log(bookings);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} color="green" />
      </div>
    </div>
  );
};

export default Bookings;
