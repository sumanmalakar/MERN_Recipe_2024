import { useContext } from "react";
import { AppContext } from "./context/App_Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddRecipe from "./components/AddRecipe";
import Register from "./components/Register";
import Login from "./components/Login";
import Saved from "./components/Saved";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Detail from "./components/Detail";
import Profile from "./components/Profile";

const App = () => {
  
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/user" element={<Profile />} />
          <Route path="/recipe/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
