import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNew = () => {
    
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigator = useNavigate();

  const AddEmployeeHandler = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      fatherName,
      email,
      phone,
    };

    axios
      .post(`http://localhost:3000/crud/v1/api/create`, payload)
      .then(() => {
        console.log(`User Submited Done`);
        alert("User Saved successfully");
      })
      .catch(() => {
        console.log(`Error`);
        alert("Error User Not Saved!");
      });

    setName("");
    setFatherName("");
    setEmail("");
    setPhone("");

    navigator("/employees");
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* <h1 className="text-3xl text-white font-bold">Add new</h1> */}
      <div>
        <form
          onSubmit={(e) => {
            AddEmployeeHandler(e);
          }}
        >
          <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
            <legend className="fieldset-legend">Add Employee</legend>

            <label className="fieldset-label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Full Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label className="fieldset-label">Father </label>
            <input
              type="text"
              className="input"
              placeholder="Father Name"
              value={fatherName}
              onChange={(e) => {
                setFatherName(e.target.value);
              }}
            />

            <label className="fieldset-label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label className="fieldset-label">Phone</label>
            <input
              type="number"
              className="input"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />

            <button className="btn btn-neutral mt-4">Add Employee</button>
          </fieldset>
        </form>
        
      </div>
    </div>
  );
};

export default AddNew;
