import { Recipe } from "../Models/Recipe.js";
import { SavedRecipe } from "../Models/SaveRecipe.js";

// create Recipe
export const addRecipe = async (req, res) => {
  const { title, ist, ing1, ing2, ing3, ing4, qty1, qty2, qty3, qty4, imgUrl } =
    req.body;

  // let recipe = await Recipe.findOne({ title });

  // if (recipe) return res.json({ message: "already added..!" });

  let recipe = await Recipe.create({
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
    user: req.user,
  });

  res.json({ message: "recipe created successfully", recipe });
};

// getAllRecipe
export const getRecipe = async (req, res) => {
  let recipe = await Recipe.find();

  if (!recipe) return res.json({ message: "no recipe available", recipe });

  res.json({ recipe });
};

// getRecipeById
export const getRecipeById = async (req, res) => {
  let id = req.params.id;

  let recipe = await Recipe.findById(id);

  if (!recipe) return res.json({ message: "recipe not exist or Invalid Id" });

  res.json({ recipe });
};

// updateRecipeById
export const updateRecipeById = async (req, res) => {
  const id = req.params.id;
  const updateRecipe = req.body;

  const recipe = await Recipe.findByIdAndUpdate(id, updateRecipe, {
    new: true,
  });

  if (!recipe) return res.status(404).json({ message: "recipe not exist.." });

  res.json({ message: "Recipe Updated Successfully ", recipe });
};

// saveRecipeById
export const savedRecipe = async (req, res) => {
  const id = req.params.id;

  let recipe = await SavedRecipe.findOne({ recipe: id });

  if (recipe) return res.json({ message: "recipe already saved", recipe });

  recipe = await SavedRecipe.create({ recipe: id });

  res.json({ message: "recipe saved successfully", recipe });
};

// getAllSavedRecipe
export const getSavedRecipe = async (req, res) => {
  // const recipe = await SavedRecipe.find();
  const recipe = await SavedRecipe.find();

  if (!recipe) return res.json({ message: "No recipe exist", recipe });

  res.json({ recipe });
};

// deleteRecipeById
export const deleteRecipeById = async (req, res) => {
  const id = req.params.id;

  let recipe = await Recipe.findById(id);

  if (!recipe)
    return res.json({ message: "Invalid Id or Recipe Not exist..!" });

  await recipe.deleteOne();

  res.json({ message: "Recipe Deleted Successfully..!" });
};

// get RecipeBy User Id
export const reciepeByUserId = async (req, res) => {
  const userId = req.params.id;
  console.log("This is userId ", userId);
  try {
    // const recipe = Recipe.find({user: userId });
    const recipe = await Recipe.find({ user: userId });
    console.log("This is in recipe userId ", recipe.user);

    // if (!recipe) return res.json({ message: "Not recipe exist ", recipe });

    res.json({ message: "User Specific Recipe", recipe });
  } catch (error) {
    res.json({ message: error.message });
  }
};
