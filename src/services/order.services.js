const models = require('../models');

class OrderServices {
  static async create(order,email){
    try {
      const result = await models.order.create(order);
     
      
      
      return result;
    } catch (error) {
      throw error;
    }
  }
  
};

module.exports = OrderServices;