import React from "react";
import moment from "moment";
const SearchResults = props => {
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
          {props.results.map((item, i) => {
            const InDate = moment(item.checkInDate);
            const OutDate = moment(item.checkOutDate);

            return (
              <tr key={i}>
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
