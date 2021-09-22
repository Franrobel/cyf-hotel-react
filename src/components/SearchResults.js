import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [highlightI, setHighlightI] = useState(false);

  const highlight = () => {
    setHighlightI(!highlightI);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" />
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
          {props.results.map(item => {
            const InDate = moment(item.checkInDate);
            const OutDate = moment(item.checkOutDate);
            //let className = "white"
            // if (i === highlightI) {
            //   className="green"
            //   console.log("this is i", i);
            //   console.log("dentro del if", highlightI);
            // }
            // console.log(item);
            return (
              <tr
                className={highlightI ? "green" : undefined}
                onClick={highlight}
              >
                <th scope="row" />
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
    </div>
  );
};
export default SearchResults;
