
const express = require('express')
const axios = require('axios')
const recipesr=express.Router()
const moment = require('moment')
const math = require('math')


recipesr.get('/search',async(req,res)=>{
    try {
        const {id} = req.params
        var url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=190382735da84956af66e618336bb308`;

        const news_get =await axios.get(url)
        const recipe = news_get.data
        res.render('recipes',{recipe})

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

recipesr.post('/recipes/:id',async(req,res)=>{
    const {query}=req.body


    try {
        var url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=190382735da84956af66e618336bb308`;

        const news_get =await axios.get(url)
        const recipes = news_get.data.results
        res.render('results',{recipes})





    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

recipesr.get('/news/:category',async(req,res)=>{
    var category = req.params.category;
    try {
        var url = 'https://api.edamam.com/api/recipes/v2?type=public&category=' + category + '&app_id=c5534fb6&app_key=86f2eef90716969e42f904c09f8e68c5&imageSize=REGULAR';

        const news_get =await axios.get(url)
        res.render('category',{recipes:news_get.data.hits})

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

recipesr.get

module.exports=recipesr