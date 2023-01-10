// React router DOM
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Loggedin from "./pages/Loggedin";
import Login from "./pages/Login";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Loggedin" element={<Loggedin />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
