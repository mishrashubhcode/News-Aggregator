
const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const moment = require('moment')
const math = require('math')


newsr.get('/',async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
         'country=in&apiKey=c4ac9aa8182541d98e61823f8af34489';

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

newsr.post('/search',async(req,res)=>{
    const search=req.body.search
    //console.log(req.body.search)


    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=c4ac9aa8182541d98e61823f8af34489`

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})





    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

newsr.get('/news/:category',async(req,res)=>{
    var category = req.params.category;
    try {
        var url = 'http://newsapi.org/v2/top-headlines?country=in&category=' + category + '&apiKey=c4ac9aa8182541d98e61823f8af34489';

        const news_get =await axios.get(url)
        res.render('category',{articles:news_get.data.articles})

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

newsr.get

module.exports=newsr