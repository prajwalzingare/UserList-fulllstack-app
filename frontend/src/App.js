import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";
import Form from "./components/Form";
import { UserList } from "./components/UserList";

function App() {
  //we have to store the data
  const [userData, setUserData] = useState("");

  /* 1st write the logic for fetching the user how will you fetch the user create the function to fetch the user. */
  const fetchUserData = async () => {
    const resp = await axios.get("/getUser");

    // if no users are there please dont set the values.got the point
    if (resp.data.Users.length > 0) {
      setUserData(resp.data.Users);
    }
  };

  // to run the fetchUserData function use useeffect  hook. it is bad practice to put async and await in useeffect hook.you can use but dont use that. we will add dependanci array
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <Form fetchUserData={fetchUserData} />
      <UserList usersInfo={userData} fetchUserData={fetchUserData} />
    </>
  );
}

export default App;
