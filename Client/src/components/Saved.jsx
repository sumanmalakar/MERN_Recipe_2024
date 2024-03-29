import { useContext } from "react";
import { AppContext } from "../context/App_Context";
import FetchRecipeById from "./FetchRecipeById";

const Saved = () => {
  const { savedRecipe } = useContext(AppContext);

  console.log("Saved Recipe = ", savedRecipe);

  return (
    <>
      <div
        className="row d-flex justify-content-center align-items-center mx-auto"
        style={{ width: "95%" }}
      >
        {savedRecipe.map((data) => (
          <div key={data._id} className="col-md-3 my-3 text-center">
            <FetchRecipeById id={data.recipe} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Saved;
