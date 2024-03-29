import React from "react";
import { useParams } from "react-router-dom";
import FetchRecipeById from "./FetchRecipeById";

const Detail = () => {
  // console.log(useParams())
  const { id } = useParams();
  return (
    <div>
      <FetchRecipeById id={id} />
    </div>
  );
};

export default Detail;
