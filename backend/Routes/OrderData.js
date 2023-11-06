const express = require("express");
const router = express.Router();
const Order = require('../models/Orders');

router.post('/orderData', async (req, res) => {
    try {
        let data = req.body.order_data;
        data.splice(0, 0, { Order_date: req.body.order_date });

        const eId = await Order.findOne({ 'email': req.body.email });
        if (eId === null) {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            });
        } else {
            await Order.findOneAndUpdate({ email: req.body.email }, { $push: { order_data: data } });
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error: " + error.message);
    }
});

router.post('/myorderData', async (req,res)=>{
    try{
        let myData = await Order.findOne({'email':req.body.email})
        res.json({orderData:myData})
    }catch{
        res.send("Server Error", error.message)
    }
})
module.exports = router;
