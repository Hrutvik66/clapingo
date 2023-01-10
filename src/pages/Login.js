import React, { useEffect, useState } from "react";
// React Router DOM
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Navigate
  const navigate = useNavigate();
  // Data state
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  const Login = () => {
    localStorage.setItem("Credencials", JSON.stringify(data));
    if (localStorage.getItem("Credencials")) {
      navigate("/Loggedin");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("Credencials")) {
      navigate("/Loggedin");
    }
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center shadow-lg w-[23rem] space-y-5 p-[2rem]">
            <h3>Login</h3>
            <input
              type="text"
              placeholder="Enter Username"
              name="userName"
              className="w-[90%] border-[1px] p-3 rounded-lg"
              value={data.userName}
              onChange={(e) => setData({ ...data, userName: e.target.value })}
            />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="w-[90%] border-[1px] p-3 rounded-lg"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <button
              className="items-center bg-gradient-to-t from-[#52A49A] to-[#00CDAC] text-lg text-white p-[0.7rem_1.5rem] rounded-full w-[50%]"
              onClick={Login}
            >
              Login
            </button>
          </div>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/images/login.gif"}
          alt="logo"
          className="flex-1 h-[40rem] w-[15rem]"
        />
      </div>
    </div>
  );
};

export default Login;
