import React, { useEffect, useState } from "react";

const CustomerProfile = ({ id }) => {
  console.log("props desde searchResults", id);

  const [profile, setProfile] = useState([]);
  console.log("usestate profile", profile);
  useEffect(() => {
    const getCustomerProfile = () => {
      fetch(`https://cyf-react.glitch.me/customers/${id}`)
        .then(response => response.json())
        .then(profile => {
          setProfile(profile);
        });
    };
    getCustomerProfile();
  }, [id]);
  console.log("id", id);
  return (
    <div>
      {id.length === 0 ? null : <p>"Customer {id} Profile"</p>}
      {id.length === 0 ? null : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col">ID</th>
              <th scope="col">E-mail</th>
              <th scope="col">Phone number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" />
              <td>{id}</td>
              <td>{profile.email}</td>
              <td>{profile.vip && profile.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CustomerProfile;
