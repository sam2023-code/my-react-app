import React, { useState, useEffect } from "react";
import axios from "axios";

import { API_BASE_URL, DEBUG_MODE } from '/src/config';
//console.log( API_BASE_URL );

const ListEmployee = () => {
  const [users, setUsers] = useState([]); // State to store the user data
  const [loading, setLoading] = useState(true); // State to manage loading

  // Fetch user data from an API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        //https://jsonplaceholder.typicode.com/users
        //http://ec2-44-204-173-147.compute-1.amazonaws.com/users
        //const response = await axios.get( "http://ec2-44-204-173-147.compute-1.amazonaws.com/users" );
        const response = await axios.get( API_BASE_URL + "/users"  );
        
        setUsers(response.data); // Set the user data
        setLoading(false); // Stop the loading spinner
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  // Delete product by ID
  const handleDelete = (id) => {
    axios
      .delete(API_BASE_URL + "/users/delete_user/" +`${id}`) // DELETE API URL
      .then(() => {
        // Remove the deleted product from the state
        setUsers(users.filter((user) => user.id !== id));
        alert("user deleted successfully!");
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  return (
    <div>
      <h1>User List</h1>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
                <td><li key={user.id} className = "table-row"> 
                  {""}
                  <button className = "delete-button" onClick={() => handleDelete(user.id)}>Delete</button> 
                </li></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
