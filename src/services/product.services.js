const models = require ('../models');

class ProductServices{
  static async add(product){
    try {
      const result = await models.product.create(product);
      return result;
    } catch (error) {
      throw error;
    }
  };
  static async get (){
    try {
      const result = await models.product.findAll({
        include:{
          model: models.user,
          as:"user",
          attributes:["username"]
        }
      })
      return result.filter(res=>res.availableQty > 0);
    } catch (error) {
      throw error;
    }
  }
};

module.exports = ProductServices;