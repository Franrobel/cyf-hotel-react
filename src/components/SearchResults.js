import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "../components/CustomerProfile";
//import Bookings from "./Bookings";

const SearchResults = props => {
  const [highlightI, setHighlightI] = useState();
  console.log("debajo de useState: highlightI", highlightI);
  function highlight(i) {
    setHighlightI(i);
    //console.log("dentro de setHighLihgt: highlightI", highlightI);
  }

  const [id, setId] = useState([]);
  const changeId = item => {
    setId(`${item.id}`);
    console.log("item", item);
    // setId(item.id);
    //     setId(bookings.id)
    // console.log("id", bookings.id);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" />
            <th scope="col"> button</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">E-mail</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">N of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((item, i) => {
            const InDate = moment(item.checkInDate);
            const OutDate = moment(item.checkOutDate);
            let className = "white";
            if (i === highlightI) {
              className = "green";
              // console.log("this is i", i);
              // console.log("dentro del if", highlightI);
            }
            // console.log(item);
            return (
              <tr className={className} onClick={() => highlight(i)} key={i}>
                <th scope="row" />
                <td>
                  <button onClick={() => changeId(item)}>View Profile</button>
                </td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.roomId}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>
                <td>{OutDate.diff(InDate, "days")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={id} />
    </div>
  );
};
export default SearchResults;
