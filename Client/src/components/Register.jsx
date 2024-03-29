import { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const { register } = useContext(AppContext);
  const [gmail, setgmail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    const result = await register(name, gmail, password);
    // console.log("This is coming from register component ", result);

    if (result.data.message === "User already exist..!") {
      toast.warn(result.data.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast.success(result.data.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        //   transition: Bounce,
      });
      setTimeout(() => {
        navigate('/login')
      }, 1500);
    }
  };

  return (
    <>
      {/* <ToastContainer /> */}
      <ToastContainer />
      <div
        className="container p-5 my-5 bg-black"
        style={{
          border: "1px solid yellow",
          width: "500px",
          borderRadius: "10px",
        }}
      >
        <h1 className="text-center">Register</h1>
        <form
          className="container mt-3"
          style={{ width: "350px" }}
          onSubmit={registerHandler}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              value={name}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              value={gmail}
              type="email"
              className="form-control"
              id="exampleInputEmail3"
              aria-describedby="emailHelp"
              onChange={(e) => setgmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid col-6 mx-auto">
            <button type="submit" className="btn btn-primary mt-3">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
