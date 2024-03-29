import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/App_Context";
import { useLocation, useNavigate } from "react-router-dom";

const FetchRecipeById = ({ id }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { url, token } = useContext(AppContext);

  const [saved, setSaved] = useState("");
  useEffect(() => {
    const getSaveRecipeById = async (id) => {
      const api = await axios.get(`${url}/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Auth: token,
        },
        withCredentials: true,
      });
      //    console.log("items saved ", api.data.recipe);
      setSaved(api.data.recipe);
      //    return api;
    };
    getSaveRecipeById(id);
  }, [id, token, url]);
  // console.log("items saved ", saved);
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center p-3">
        <img
          src={saved?.imgUrl}
          alt="alt"
          style={{
            width: "230px",
            height: "230px",
            borderRadius: "10px",
            border: "2px solid yellow",
          }}
        />
      </div>
      <h3 className="text-center">{saved?.title}</h3>
      {location.pathname !== "/saved" && (
        <>
          <div className="container d-flex justify-content-center align-content-center gap-5">
            <div className="left">
              <h3>
                {saved?.ing1} - {saved?.qty1}{" "}
              </h3>
              <h3>
                {saved?.ing2} - {saved?.qty2}{" "}
              </h3>
              <h3>
                {saved?.ing3} - {saved?.qty1}{" "}
              </h3>
              <h3>
                {saved?.ing4} - {saved?.qty4}{" "}
              </h3>
            </div>
            <div className="right" style={{ maxWidth: "600px" }}>
              {saved?.ist}
            </div>
          </div>
          <div className="text-center my-3">
            <button
              className="btn btn-warning text-center"
              onClick={() => navigate("/")}
            >
              Back To Home
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FetchRecipeById;
