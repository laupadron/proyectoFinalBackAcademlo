const {Router} = require('express');
const {addProduct, getProducts}= require('../controllers/product.controllers');

const router = Router();

/**
 * @openapi
 * /api/v1/product:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: create a new product into the app
 *     tags: [Product]
 *     requestBody:
 *       description: required fields to add a new product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/addProduct'
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product add
 *       400:
 *         description: not created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: something wrong
 */

router.post ('/', addProduct);
router.get('/', getProducts);

module.exports = router;