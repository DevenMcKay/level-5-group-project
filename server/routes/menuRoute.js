const express = require("express")
const menuRouter = express.Router()
const Menu = require("../models/menuSchema")


//Routes
    //get All menu items
menuRouter.get("/", (req, res, next) => {
   Menu.find((err, items) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(items)
   })
})

    //get One item
menuRouter.get("/:itemId", (req, res) => {
    const itemId = req.params.itemId
    const foundItem = Menu.find(item => item._id === itemId)
    res.send(foundItem)
})

//     //get by lunch or dinner type
menuRouter.get("/search/type", (req, res) => {
    Menu.find({ type: req.query.type }, (err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

    //post -Add- a new item
menuRouter.post("/", (req, res, next) => {
    const newMenu = new Menu(req.body)
    newMenu.save((err, savedMenu) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMenu)
    })
})

    //delete one
menuRouter.delete("/:itemId", (req, res) => {
   Menu.findOneAndDelete({_id: req.params.itemId}, (err, deletedItem) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(`Successfully deleted item ${deletedItem.item} from the database`)
   })
})

//     //update one
menuRouter.put("/:itemId", (req, res, next) => {
    Menu.findOneAndUpdate(
        {_id: req.params.itemId},       //find this one to update
        req.body,                       //update the object with this data
        { new: true },                  //send back updated version
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        } 
    )
})


module.exports = menuRouter