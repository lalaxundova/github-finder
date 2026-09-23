import Header from './components/Header'
import SearchForm from './components/SearchForm'
import GitUsers from './components/GitUsers'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const App = () => {
  const [user, SetUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((res) => SetUser(res.data));
  }, []);

  const searchUser = (keyword) => {
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => {
        if (res.data.items.length === 0) {
          Swal.fire({
            icon: "error",
            title: "User not found!",
            text: "Please enter another username.",
          });

        }
        SetUser(res.data.items);
      })
  };

  return (
    <div style={{ backgroundColor: "#111318" }}>
      <Header />
      <SearchForm sendKeyWord={searchUser} />
      <GitUsers comingusers={user} />
    </div>
  );
};

export default App;
