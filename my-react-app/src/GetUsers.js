// import React, { useEffect } from "react";

// const GetUsers = () => {
//   const authToken =
//     "fba855bf2d9793ffb297b1c2d679eb284971326f362a1d4da3c2215ed4505665";
//   const graphqlEndpoint = "https://gorest.co.in/public/v2/users";

//   useEffect(() => {
//     fetch(graphqlEndpoint, {
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.error("Error:", error));
//   }, []);

//   return <div>Check the console for the user data.</div>;
// };

// export default GetUsers;



import React, { useEffect, useState } from "react";
import './GetUsers.css'; // Import the CSS file


const GetUsers = () => {
  const authToken = "fba855bf2d9793ffb297b1c2d679eb284971326f362a1d4da3c2215ed4505665";
  const endpoint = "https://gorest.co.in/public/v2/users";
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);


  useEffect(() => {
    fetch(endpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('data', data);
        setUsers(data);
      }) // Adjust this line based on the structure of the API response
      .catch(error => console.error('Error:', error));
  }, []);
  
  useEffect(() => {
    console.log('users', users);
  }, [users]);

  return (
    <div className="container">
    <div className="card">
    <h3 style={{ paddingLeft: '250px', width: '100%' }}>LIST OF USERS ------> (Select a user)</h3>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {/* <th>Email</th> */}
            {/* <th>Gender</th> */}
            {/* <th>Status</th> */}
          </tr>
        </thead>
        <tbody>
          {users && users.map((user) => (
            <tr key={user.id} onClick={() => setSelectedUser(user)}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              {/* <td>{user.email}</td> */}
              {/* <td>{user.gender}</td> */}
              {/* <td>{user.status}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {selectedUser && (
        <form className="user-form">
          <label>
            ID:
            <input type="text" value={selectedUser.id} readOnly style={{ width: '75%' }} />
          </label>
          <label>
            Name:
            <input type="text" value={selectedUser.name} readOnly style={{ width: '75%' }} />
          </label>
          <label>
            Email:
            <input type="text" value={selectedUser.email} readOnly style={{ width: '75%' }} />
          </label>
          <label>
            Gender:
            <input type="text" value={selectedUser.gender} readOnly style={{ width: '75%' }} />
          </label>
          <label>
            Status:
            <input type="text" value={selectedUser.status} readOnly  />
          </label>
        </form>
      )}
    </div>
  );
};

export default GetUsers;