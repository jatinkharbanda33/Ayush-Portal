import React, { useState } from "react";
import "./Register.scss"
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import upload from "../../utils/upload";

const Register = () => {
  const [file, setFile] = useState(null);
  const [orgFile, setOrgFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isinv: false,
    orgproof:"",
    desc: "",
    type:""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleOrg = (e) => {
    setUser((prev) => {
      return { ...prev, isinv: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    const url2=await upload(orgFile);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
        orgproof:url2,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="">Display Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder="India"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </div>
        <div className="right">
          <h1>Are you An Investor</h1>
          <div className="toggle">
          <label className="switch">
              <input type="checkbox" onChange={handleOrg} />
              <span className="slider round"></span>
            </label>
            
          </div>
          
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+91 xxxx xxxx xx"
            onChange={handleChange}
          />
          <label htmlFor="">Organisation Proof</label>
          <input type="file" onChange={(e) => setOrgFile(e.target.files[0])} />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  )
}

export default Register

