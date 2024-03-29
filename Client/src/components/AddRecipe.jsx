import React, { useState } from "react";
import { AppContext } from "../context/App_Context";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const navigate = useNavigate();
  const { addRecipe } = useContext(AppContext);
  const [formData, setformData] = useState({
    title: "",
    ist: "",
    ing1: "",
    ing2: "",
    ing3: "",
    ing4: "",
    qty1: "",
    qty2: "",
    qty3: "",
    qty4: "",
    imgUrl: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setformData({ ...formData, [name]: value });

    // console.log(formData);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const {
      title,
      ist,
      ing1,
      ing2,
      ing3,
      ing4,
      qty1,
      qty2,
      qty3,
      qty4,
      imgUrl,
    } = formData;
    console.log("fghj");

    const result = await addRecipe(
      title,
      ist,
      ing1,
      ing2,
      ing3,
      ing4,
      qty1,
      qty2,
      qty3,
      qty4,
      imgUrl
    );
    console.log(result);
    // setformData({
    //   title: "",
    //   ist: "",
    //   ing1: "",
    //   ing2: "",
    //   ing3: "",
    //   ing4: "",
    //   qty1: "",
    //   qty2: "",
    //   qty3: "",
    //   qty4: "",
    //   imgUrl: "",
    // });

    toast.success(result.data.message, {
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

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <ToastContainer />
      <div
        className="container p-3 my-5 bg-black"
        style={{
          border: "1px solid yellow",
          width: "500px",
          borderRadius: "10px",
        }}
      >
        <h1 className="text-center">Add Recipe</h1>
        <form
          className="container mt-3"
          style={{ width: "350px" }}
          onSubmit={onSubmitHandler}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              value={formData.title}
              name="title"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Instruction
            </label>
            <input
              value={formData.ist}
              name="ist"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              ingredient - 1
            </label>
            <input
              value={formData.ing1}
              name="ing1"
              type="text"
              className="form-control"
              id="ingredient1"
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              ingredient - 2
            </label>
            <input
              value={formData.ing2}
              name="ing2"
              type="text"
              className="form-control"
              id="ingredient2"
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              ingredient - 3
            </label>
            <input
              value={formData.ing3}
              name="ing3"
              type="text"
              className="form-control"
              id="ingredient3"
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              ingredient - 4
            </label>
            <input
              value={formData.ing4}
              name="ing4"
              type="text"
              className="form-control"
              id="ingredient4"
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              quantity - 1
            </label>
            <input
              value={formData.qty1}
              name="qty1"
              type="text"
              className="form-control"
              id="quantity1"
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              quantity - 2
            </label>
            <input
              value={formData.qty2}
              name="qty2"
              type="text"
              className="form-control"
              id="quantity2"
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              quantity - 3
            </label>
            <input
              value={formData.qty3}
              name="qty3"
              type="text"
              className="form-control"
              id="quantity3"
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              quantity - 4
            </label>
            <input
              value={formData.qty4}
              name="qty4"
              type="text"
              className="form-control"
              id="quantity4"
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              imgUrl
            </label>
            <input
              value={formData.imgUrl}
              name="imgUrl"
              type="text"
              className="form-control"
              id="imgUrl"
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className="d-grid col-6 mx-auto">
            <button type="submit" className="btn btn-primary mt-3">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRecipe;
