const express= require('express');
const router=express.Router();
const CategoriaController=require('../controllers/CategoriaControllers');

router.post('/create-categoria', CategoriaController.create);

module.exports= router;