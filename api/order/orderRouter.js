const express = require('express');
const router = express.Router();
const Order = require('./orderModel');
const Owner = require('../owner/ownerModel');
const User = require('../user/userModel');
//const authOwner = require('../../middleware/authOwner');
const authUser = require('../../middleware/authUser');

//@route   Post api/order
//@desc    Order add by User
//@access  Private
// router.post(
//     "/:id",
//     [auth],
//     async (req, res ) =>{
//         const {
//             no_of_meals,
//             no_of_days,
//             total_amount,
//             status
//         } = req.body
//     try{
//         const order = await Order.findOne(req.params.id)
//         .populate("user", ["name"], "owner", ["name"])
        
        
//     }
//     }
// ) 

router.post("/",[authUser],
async(req,res)=>{
    try{
        const newOrder = req.body;
        await Order.create(newOrder);
        res.send(newOrder);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


module.exports = router;



