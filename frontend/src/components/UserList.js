import axios from "axios";
import React, { useEffect, useState } from "react";

export const UserList = () => {
  // write the logic hear

  //we have to store the data
  const [UserData, setUserData] = useState(null);

  /* 1st write the logic for fetching the user how will you fetch the user create the function to fetch the user. */
  const fetchUserData = async () => {
    const resp = await axios.get("/getUser");
    // console.log(resp);
    // console.log(resp.data.Users);
    // if no users are there please dont set the values.got the point
    if (resp.data.Users.length > 0) {
      setUserData(resp.data.Users);
    }
  };

  // to run the fetchUserData function use useeffect  hook. it is bad practice to put async and await in useeffect hook.you can use but dont use that. we will add dependanci array
  useEffect(() => {
    fetchUserData();
  }, [UserData]);

  /* we bring the data with help of axios but how can we show to our page so for that we have to map the whole page on fetchuserdata or the data we have stored. */
  //function to edit the user
  const handleEdit = async (user) => {
    const userName = prompt("Enter your new name");
    const userEmail = prompt("Enter Your new mail");

    if (!userName || !userEmail) {
      alert("Please Enter Name and Email Both");
    } else {
      const resp = await axios.put(`/editUser/${user._id}`, {
        name: userName,
        email: userEmail,
      });
      console.log(resp);
    }
  };
  // function for deletting the user
  const handleDelete = async (userId) => {
    const resp = await axios.delete(`/deleteUser/${userId}`);
    console.log(resp);
  };

  return (
    <div>
      {" "}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              All Users
            </h1>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Email
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Edit
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {UserData &&
                  UserData.map((user) => (
                    <tr>
                      <td className="px-4 py-3">{user.name} </td>
                      <td className="px-4 py-3">{user.email}</td>
                      <td className="px-4 py-3">
                        <button
                          className="hover:text-green-500"
                          onClick={() => handleEdit(user)}
                        >
                          Edit
                        </button>
                      </td>
                      <td className="px-4 py-3 text-lg text-gray-900">
                        <button
                          className="hover:text-red-500"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
