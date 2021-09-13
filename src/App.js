import React from "react";

import Bookings from "./components/Bookings";
import Heading from "./Heading";
import TouristCardsCities from "./components/TouristCardsCities";
import Footer from "./Footer";
import Restaurant from "./components/Restaurant";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristCardsCities />
      <Restaurant />
      <Footer
        info={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
