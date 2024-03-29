import mongoose from "mongoose";

const savedRecipeSchema = new mongoose.Schema({
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
    required: true,
  },
  saved_at: {
    type: Date,
    default: Date.now(),
  },
});

 export const SavedRecipe = mongoose.model("SavedRecipe", savedRecipeSchema);