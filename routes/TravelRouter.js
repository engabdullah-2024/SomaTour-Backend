const express = require("express");
const TravelModel = require("../models/TravelModel");

const router = express.Router();


// API to create a new note
router.post("/note/create", async (req, res) => {
    const newTravel = TravelModel(req.body);
    const saveTravel = await newTravel.save();
    if (saveTravel) {
        res.send("Note has been created successfully");
    } else {
        res.status(500).send("Error creating note");
    }
});
router.delete("/note/delete/:id" , async (req, res) =>{
    const deleteResult =     await  TravelModel.deleteOne({_id: req.params.id})
    if(deleteResult){
        res.send("Result has been deleted successifully")
    }
})

// API to get all notes
router.get("/note", async (req, res) => {
    const travels = await TravelModel.find();
    if (travels) {
        res.send(travels);
    } else {
        res.status(404).send("No notes found");
    }
});

// API to update a note
router.put("/note/update/:id" ,  async(req, res) =>{
    const updateData =  await  TravelModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(updateData){
        res.send("Note has been successfully updated")
    }
})

// API to delete a note
router.delete("/note/delete/:id" , async (req, res) =>{
    const deleteResult =     await  TravelModel.deleteOne({_id: req.params.id})
    if(deleteResult){
        res.send("Result has been deleted successifully")
    }
})
router.get ("/note/single/:id" , async (req, res) =>{
    const getSingleData= await TravelModel.findOne({_id: req.params.id})
    if(getSingleData){
        res.send(getSingleData)
    }
})

module.exports = router;