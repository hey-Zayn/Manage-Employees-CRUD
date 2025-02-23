import { Plus, Trash, UserPen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const AllEmployees = () => {
  const navigator = useNavigate()
  const [users, setUsers] = useState([]);
  const [updateId, setUpdateId] = useState(""); // State to store the employee ID to be updated
  const [updateValue, setUpdateValue] = useState({
    name: "",
    fatherName: "",
    email: "",
    phone: "",
  });
  const GetUser_API = "http://localhost:3000/crud/v1/api/get";

  // Fetch all employees
  useEffect(() => {
    const GetUsers = async () => {
      try {
        const response = await axios.get(GetUser_API);
        setUsers(response.data.user); // Set the users state
        console.log(response.data.user);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    GetUsers();
  }, []);

  // Handle input change for the update form
  const onChangeValueHandler = (e) => {
    setUpdateValue({
      ...updateValue,
      [e.target.name]: e.target.value,
    });
  };

  // Handle update button click
  const updateHandler = async (e) => {
    e.preventDefault();

    try {
      // Send a PUT request to update the employee data
      const response = await axios.put(
        `http://localhost:3000/crud/v1/api/update/${updateId}`,
        updateValue
      );

      console.log("Employee updated successfully:", response.data);

      // Refresh the employee list
      const updatedUsers = users.map((user) =>
        user._id === updateId ? response.data.user : user
      );
      setUsers(updatedUsers);

      // Close the modal
      // document.getElementById("my_modal_3").close();
      navigator('/');
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  // Open modal and populate form with employee data
  const openUpdateModal = (user) => {
    setUpdateId(user._id); // Set the employee ID to be updated
    setUpdateValue({
      name: user.name,
      fatherName: user.fatherName,
      email: user.email,
      phone: user.phone,
    });
    document.getElementById("my_modal_3").showModal(); // Open the modal
  };

  const deleteHandler = async(userId)=>{
    try {
      await axios.delete(`http://localhost:3000/crud/v1/api/delete/${userId}`);
      console.log("Employee deleted successfully");
      const updatedUsers = users.filter((user)=>{user._id !== userId});
      setUsers(updatedUsers);
      navigator("/")
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="flex flex-col w-full h-screen px-4">
      <div className="w-full flex justify-between items-center py-10 px-4">
        <h1 className="text-2xl text-white font-medium text-center">
          Manage Employees
        </h1>
        <Link to="/add">
          <button className="btn btn-soft btn-success">
            <Plus size={20} /> Add Employee
          </button>
        </Link>
      </div>
      <div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* Table Head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Father</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Map over the users array and render each user */}
              {users.map((user) => (
                <tr key={user._id}>
                  <th>{user.name}</th>
                  <td>{user.fatherName}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td className="flex gap-2 w-full">
                    <button
                      className="btn btn-square btn-soft btn-success"
                      onClick={() => openUpdateModal(user)} // Open modal with employee data
                    >
                      <UserPen size={20} />
                    </button>
                    <button className="btn btn-square btn-soft btn-error" onClick={() => deleteHandler(user._id)}>
                      <Trash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Employee Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" className="w-full justify-center items-center">
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Full Name</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Name"
                name="name"
                value={updateValue.name}
                onChange={onChangeValueHandler}
              />
              <legend className="fieldset-legend">Father Name</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Father Name"
                name="fatherName"
                value={updateValue.fatherName}
                onChange={onChangeValueHandler}
              />
              <legend className="fieldset-legend">Email</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Email"
                name="email"
                value={updateValue.email}
                onChange={onChangeValueHandler}
              />
              <legend className="fieldset-legend">Phone</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Phone"
                name="phone"
                value={updateValue.phone}
                onChange={onChangeValueHandler}
              />
              <button
                className="btn btn-neutral mt-4"
                onClick={updateHandler} // Handle update
              >
                Update Employees
              </button>

              <p className="fieldset-label">
                Press ESC key or click on ✕ button to close
              </p>
            </fieldset>

            {/* Close button */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AllEmployees;