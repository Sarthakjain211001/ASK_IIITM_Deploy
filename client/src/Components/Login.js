import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from '../App'
import { useCookies } from 'react-cookie';

const Login = () => {
  const {state,dispatch} = useContext(UserContext)
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['jwtoken']);
  const [user, setUser] = useState({
    email: "",
    password: "",
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
    const { email, password } = user;
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
       if(data.error){
        window.alert('UnSuccessful')
          console.log("error");
       }
       else{
          setCookie('jwtoken', data.token,{ path: '/' });
          console.log(data.user)
          dispatch({type:"USER",payload:data.user})
          console.log(state)
          //window.alert('Successful')
          navigate('/');
       }
    }).catch(err=>{
        console.log(err)
    })
  };
  return (
    <div className="p-2 container" >
      <div className="form-full border border-white  shadow-lg p-3 mb-5 bg-white rounded">
        <form method="POST" className="rounded">
          <img
            src="https://pbs.twimg.com/media/FEsUcgBVgAQAv77?format=jpg&name=small"
            alt="ASK_IIITM"
            className="rounded mb-2 img-fluid "
            // style={{height:"20%"}}
           
          />
          
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
          <div className="form-group mt-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              value={user.password}
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-2"
            value="login"
            onClick={PostData}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
