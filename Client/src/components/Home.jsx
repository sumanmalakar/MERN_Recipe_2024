import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { recipe, saveRecipeById } = useContext(AppContext);
  const navigate = useNavigate()
  const saveRecipeBy = async (id) => {
    const result = await saveRecipeById(id);
    console.log(result);

    toast.success(result.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <>
      {/* <div className="container"> */}
      <div
        className="row d-flex justify-content-center align-items-center mx-auto"
        style={{ width: "95%" }}
      >
        {recipe.map((data) => (
          <div key={data._id} className="col-md-3 my-3 text-center">
            <div className="card bg-dark text-light" style={{ width: "18rem" }}>
              <div className="d-flex justify-content-center align-items-center p-3">
                <img
                  src={data.imgUrl}
                  alt="alt"
                  style={{
                    width: "220px",
                    height: "220px",
                    borderRadius: "10px",
                    border: "2px solid yellow",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <button
                  className="btn btn-primary mx-3 my-3"
                  onClick={() => saveRecipeBy(data._id)}
                >
                  save
                </button>
                <button className="btn btn-warning my-3" onClick={()=>navigate(`/recipe/${data._id}`)}>View More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </>
  );
};

export default Home;
