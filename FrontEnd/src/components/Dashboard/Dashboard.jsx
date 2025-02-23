import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsersInfo = async () => {
      const response = await axios.get("http://localhost:3000/crud/v1/api/get");

      setUsers(response?.data.user);
      console.log(users)
    };
    getUsersInfo();
  }, []);
  return (
    <div className="flex justify-center items-center w-full h-screen">
      {/* <Sidebar/> */}
      <div className=" flex items-center justify-center gap-1 w-72 h-48 bg-red-500 rounded-xl shadow-xl">
        <h1 className="text-2xl font-semibold">total Users :</h1>
        <h1 className="text-2xl font-bold">{users.length}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
