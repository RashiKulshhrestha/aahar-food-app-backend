const express = require('express');
const router = express.Router();
const Order = require('./orderModel');
const Owner = require('../owner/ownerModel');
const User = require('../user/userModel');
const authOwner = require('../../middleware/authOwner');
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

router.post("/",[authUser,authOwner],
async(req,res)=>{
    const {
        no_of_meals,
        no_of_days,
        total_amount,
        status,
        userId,
        ownerId
    } = req.body
    const userField={}
    userField.user = req.user._id;
    const ownerField = {}
    ownerField.owner = req.owner._id; 
    try{
        const user = await User.findOne({user: req.user._id});
        const owner = await Owner.findOne({owner: req.owner._id});
        console.log(owner);
        const userId = user._id;
        const ownerId = owner._id;
        const newOrder = new Order({
            no_of_meals,
            no_of_days,
            total_amount,
            status,
            userId,
            ownerId
        })
        await newOrder.save();
        res.send(newOrder);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


module.exports = router;



