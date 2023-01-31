
const OrderServices = require('../services/order.services');
const transporter = require('../utils/mailers');

const createBuy = async (req, res) => {
  try {
    const order = req.body;
   
    
    const result = await OrderServices.create(order);
    
    res.status(201).json({message:'new order created'});
    
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports ={createBuy};