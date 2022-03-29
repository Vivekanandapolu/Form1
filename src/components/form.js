import React, { useState } from "react";
import "../App.css";

const Form = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="div1">
      <div></div>
      <form onSubmit={submitHandler}>
        <div className="name">
          <label className="lab1">Name:</label>
          <input
            type="text"
            name="username"
            required
            placeholder="username"
            className="name1"
            value={username}
            onChange={changeHandler}
          />
        </div>
        <br />
        <div className="pass">
          <label className="lab2">Password:</label>
          <input
            type="password"
            placeholder="password"
            require
            name="password"
            className="pass1"
            value={password}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input type="submit" className="sub" />
          <input type="reset" className="reset" />
        </div>
      </form>
        {/* <p>The submitted data is:{data}</p> */}
    </div>
  );
};

export default Form;
