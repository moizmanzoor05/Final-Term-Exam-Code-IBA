const Poetry = require ('../models/poetryModel');

exports.createPoetry = async (req, res) => {
    const addPoetry = await Poetry.create(req.body);
    res.status(200).jsaon ({sucess: true, addPoetry})
}

exports.getPoetry = async(req,res) =>{
    const poetries= await Poetry.find();
    res.status(201).jsaon ({sucess: true, poetries});
}