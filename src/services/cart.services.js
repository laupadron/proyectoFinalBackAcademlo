const models = require('../models');

class CartServices {
  static async create(cartUser){
    try {
      const result = await models.cart.create(cartUser);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addProduct(newProduct){
    try {
      const result = await models.product_in_cart.create(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = CartServices;