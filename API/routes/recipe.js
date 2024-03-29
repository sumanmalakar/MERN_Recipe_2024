import express from 'express'
import { addRecipe, deleteRecipeById, getRecipe, getRecipeById, getSavedRecipe, reciepeByUserId, savedRecipe, updateRecipeById } from '../controllers/receipe.js'

import { Authenticate } from '../middleware/auth.js'

const router = express.Router()

// add new Recipe
router.post('/add',Authenticate, addRecipe)

// get all Recipe
router.get('/',getRecipe)
 
// get Recipe by Id
router.get('/:id', getRecipeById)

// update Recipe by Id
router.put('/:id',Authenticate, updateRecipeById)

// delete Recipe by Id
router.delete('/:id',Authenticate, deleteRecipeById)

// getRecipe by UserId
router.get('/user/:id',Authenticate, reciepeByUserId)

// save Recipe by Id
router.post('/:id',Authenticate, savedRecipe)

// get all saved Recipe
router.get('/recipe/saved', getSavedRecipe)

export default router