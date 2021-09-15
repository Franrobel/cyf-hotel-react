import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "../components/SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  const [bookings, setBookings] = useState([FakeBookings]);
  console.log(setBookings);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={FakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;
