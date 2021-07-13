import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import "./UserList.css";

const UserList = () => {
  const [User, setUser] = useState([]);
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser(res.data);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, []);
  console.log(error);
  console.log(User);

  return (
    <div>
      {isLoading ? (
        <img
          src={
            "https://lh3.googleusercontent.com/proxy/AsHCG30o1xVtttm_3Y3yjyPpnS3ynkUEBxj3nu1SCZ714K_Rfcw9jEE_1sApyhhyt8DRdPOLxUAYqupw47QPQ9i9vwcP3cM"
          }
          alt="loading"
        />
      ) : (
        <div className="Users">
          {User.map((user) => (
            <div>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default UserList;
