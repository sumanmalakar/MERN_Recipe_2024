import React, { useContext } from "react";
import { Link, } from "react-router-dom";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const { isAuthenticated, logOut } =
    useContext(AppContext);

    const logout = () =>{
      logOut();
         toast.success("LogOut Successfully..!", {
           position: "top-right",
           autoClose: 1000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "dark",
           //   transition: Bounce,
         });
    }

  return (
    <>
      {/* <ToastContainer /> */}

      <div className="nav bg-dark">
        <Link
          to={"/"}
          className="left"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h3>MERN Recipe</h3>
        </Link>
        <div className="right">
          {!isAuthenticated && (
            <Link to={"/login"} className="btn btn-primary mx-2">
              Login
            </Link>
          )}
          {!isAuthenticated && (
            <Link to={"/register"} className="btn btn-warning mx-2">
              Register
            </Link>
          )}

          {isAuthenticated && (
            <Link to={"/add"} className="btn btn-info mx-2">
              Add
            </Link>
          )}
          {isAuthenticated && (
            <Link to={"/user"} className="btn btn-warning mx-2">
              profile
            </Link>
          )}


          {isAuthenticated && (
            <Link className="btn btn-danger mx-2" onClick={logout}>
              LogOut
            </Link>
          )}

          <Link to={"/saved"} className="btn btn-light mx-2">
            Saved
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
