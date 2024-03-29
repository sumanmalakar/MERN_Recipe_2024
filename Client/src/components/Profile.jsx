import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";

const Profile = () => {
  const { user, userRecipe } = useContext(AppContext);
  console.log(userRecipe);
  return (
    <div className="container text-center my-5">
      <h1>Welcome, {user?.name}</h1>
      <h2>{user?.gmail}</h2>
      <div
        className="row d-flex justify-content-center align-items-center mx-auto"
        style={{ width: "95%" }}
      >
        {userRecipe?.map((data) => (
          <div key={data._id} className="col-md-3 my-3 text-center">
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
           
              <h5>{data.title}</h5>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
