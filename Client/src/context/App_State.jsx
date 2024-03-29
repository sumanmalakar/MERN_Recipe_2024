import { useEffect, useState } from "react";
import { AppContext } from "./App_Context";
import axios from "axios";

const App_State = (props) => {
  const [recipe, setRecipe] = useState([]);
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [savedRecipe, setsavedRecipe] = useState([]);
  const [user, setuser] = useState("");
  const [userId, setuserId] = useState("");
  const [reaload, setReaload] = useState(false);
  const [userRecipe, setuserRecipe] = useState([]);
  const url = "http://localhost:1000/api";

  // Fetching data
  useEffect(() => {
    const fetchRecipe = async () => {
      const api = await axios.get(`${url}/`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      // console.log(api.data.recipe);
      setRecipe(api.data.recipe);

      // console.log("Fetchin recipe from api ", recipe);
    };
    if (recipe.length === 0) {
      fetchRecipe();
    }
    // console.log("Fetchin recipe from api ", recipe);
    getSavedRecipe();
    myProfile();
    getRecipeByUserId();
  }, [recipe, reaload, ,userId]);

  // localStorage code
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }

    const tokenFromLocalStorage = localStorage.getItem("token", token);
    if (tokenFromLocalStorage) {
      setIsAuthenticated(true);
      setToken(tokenFromLocalStorage);
    } else {
      setIsAuthenticated(false);
    }
    console.log("Authenticated = ", isAuthenticated);
  }, [token, isAuthenticated]);

  // register
  const register = async (name, gmail, password) => {
    const api = await axios.post(
      `${url}/register`,
      { name, gmail, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    // console.log("login ",api.data)
    return api;
  };

  // login
  const login = async (gmail, password) => {
    const api = await axios.post(
      `${url}/login`,
      {
        gmail,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    if (api.data.token) {
      setToken(api.data.token);
      // console.log("token saved")
    }
    // console.log("login ",api.data)
    return api;
  };

  // logout
  const logOut = () => {
    window.localStorage.removeItem("token");
    setIsAuthenticated(false);
    setToken("");
    // console.log("logging out");
  };

  // myProfile
  const myProfile = async () => {
    const api = await axios.get(`${url}/profile`, {
      headers: {
        "Content-Type": "application/json",
        Auth: token,
      },
      withCredentials: true,
    });
    // console.log("User profile ", api.data.user)
    const id = await api.data.user._id
    setuserId(id);
    setuser(api.data.user);
    setReaload(!reaload)
    // console.log(id)
    // console.log("User id = ", userId)
    // console.log("user = ",user)
  };

  // addRecipe
  const addRecipe = async (
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
  ) => {
    const api = await axios.post(
      `${url}/add`,
      {
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
      },
      {
        headers: {
          "Content-Type": "application/json",
          Auth: token,
        },
        withCredentials: true,
      }
    );
    console.log(api);
    setReaload(!reaload);

    return api;
  };
  // console.log("This is token = ",token)

  // saveRecipeById
  const saveRecipeById = async (id) => {
    const api = await axios.post(
      `${url}/${id}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Auth: token,
        },
        withCredentials: true,
      }
    );
    setReaload(!reaload);
    console.log("items saved ", api.data);
    return api;
  };

  // getSavedRecipe
  const getSavedRecipe = async () => {
    const api = await axios.get(`${url}/recipe/saved`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setsavedRecipe(api.data.recipe);
    setReaload(!reaload);
    // console.log("items saved ", api.data);
  };

  // getRecipeByUserId
  const getRecipeByUserId = async () => {
    if (userId) {
      const api = await axios.get(`${url}/user/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Auth: token,
        },
        withCredentials: true,
      });
      // setsavedRecipe(api.data.recipe);
      setuserRecipe(api.data.recipe);
    setReaload(!reaload);

      // console.log("data",api)
      console.log("recipe user ", userRecipe)
    }
  };

  return (
    <AppContext.Provider
      value={{
        url,
        recipe,
        register,
        login,
        logOut,
        token,
        setToken,
        addRecipe,
        savedRecipe,
        saveRecipeById,
        isAuthenticated,
        setIsAuthenticated,
        userRecipe,
        reaload,
        user,
        setReaload,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default App_State;
