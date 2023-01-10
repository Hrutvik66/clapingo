import React, { useState, useEffect } from "react";

// React Router DOM
import { useNavigate } from "react-router-dom";

const Loggedin = () => {
  const [user, setUser] = useState({});
  // Navigate
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Credencials"));
    if (data) {
      setUser(data);
    } else {
        navigate("/");
    }
  }, []);

  const Logout = () => {
    localStorage.removeItem("Credencials");
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-10">
      <h2>
        Hey <span>{user.userName}</span>, You Loggedin Successfully 🎉
      </h2>
      <button
        className="items-center bg-gradient-to-t from-[#52A49A] to-[#00CDAC] text-lg text-white p-[0.7rem_1.5rem] rounded-full w-[10rem]"
        onClick={Logout}
      >
        Log out
      </button>
    </div>
  );
};

export default Loggedin;
