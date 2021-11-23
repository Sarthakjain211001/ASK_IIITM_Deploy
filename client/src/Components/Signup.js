import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = user;
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        cpassword,
      }),
    }).then(function (response) {
      console.log(response);
      if (response.status === 422) {
        window.alert("Registration Not Successfull");
      } else {
        window.alert("Registered Successfully");
        navigate("/login");
      }
    });
  };
  return (
    <div className="form-full border border-white container shadow p-3 mb-5 bg-white rounded">
      <form method="POST">
        <div className="form-group mt-2">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            name="name"
            className="form-control mt-2"
            id="name"
            value={user.name}
            onChange={handleInputs}
            placeholder="enter user-name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control mt-2"
            id="email"
            aria-describedby="emailHelp"
            value={user.email}
            onChange={handleInputs}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control mt-2"
            id="password"
            value={user.password}
            onChange={handleInputs}
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Cpassword</label>
          <input
            type="cpassword"
            name="cpassword"
            className="form-control mt-2"
            id="cpassword"
            value={user.cpassword}
            onChange={handleInputs}
            placeholder="Re-write Password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-2"
          value="signup"
          onClick={PostData}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
