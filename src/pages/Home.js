// ! This is whole home page

// React
import { useEffect } from "react";
// React Router DOM
import { useNavigate } from "react-router-dom";
// Components
import Hero_section from "../components/Hero_section";
import Horizontal_nav from "../components/Horizontal_nav";
import Offer_section from "../components/Offer_section";
import Statastic_section from "../components/Statastic_section";
import Work from "../components/Work";

const Home = () => {
  // Navigate
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("Credencials")) {
      navigate("/Loggedin");
    }
  }, []);
  return (
    <div>
      <Horizontal_nav />
      <Hero_section />
      <Statastic_section />
      <Offer_section />
      <Work />
    </div>
  );
};

export default Home;
