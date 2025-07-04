const express = require('express');
const router = express.Router();
const recipeSchema = require('../models/recipe');
const multer = require('multer');
const path = require('path');
const verifyToken=require('../middleware/auth')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const filename = Date.now() + '-' + file.fieldname
      cb(null, filename)
    }
  })
  
  const upload = multer({ storage: storage })

// GET all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await recipeSchema.find();
    return res.json(recipes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// POST new recipe with image
router.post('/recipe', upload.single('converImage'),verifyToken, async (req, res) => {
  const { title, instructions, time } = req.body;
  let ingredients = req.body.ingredients;

  if (!title || !instructions || !ingredients) {
    return res.status(400).json({ message: 'Required fields missing' });
  }

  // Handle ingredients (sent as array or string)
  if (typeof ingredients === 'string') {
    ingredients = ingredients.split(',').map(item => item.trim());
  }

  if (Array.isArray(ingredients)) {
    ingredients = ingredients.map(item => item.trim());
  }

  try {
    const newRecipe = await recipeSchema.create({
      title,
      ingredients,
      instructions,
      time,
      converImage: req.file?.filename || "",
      createdBy:req.user.id
    });

    return res.status(201).json(newRecipe);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// PUT update recipe
router.put('/recipe/:id',  upload.single('converImage'),async (req, res) => {
  const { title, ingredients, instructions, time, converImage } = req.body;

  try {
    const updatedRecipe = await recipeSchema.findByIdAndUpdate(
      req.params.id,
      { title, ingredients, instructions, time, converImage },
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




router.delete('/recipe/:id',async(req,res)=>{
    try{
        await recipeSchema.deleteOne({_id:req.params.id})
        res.json({status:"ok"})
    }
    catch(err){
        return res.status(400).json({message:"error"})
    }
})


module.exports = router;
