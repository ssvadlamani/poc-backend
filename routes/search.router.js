const express = require('express');
const router = express.Router();
const searchController=require('../services/search.services');

router.post('/contactSearch',search)

function search(req,res)
{
    console.log("mmmmmmm");
    let params=req.body;
    searchController.individualsSearch(params).then(success=>{
        res.send(success);
    }).catch(err=>{
        res.send(err);       
    })
}


module.exports = router;