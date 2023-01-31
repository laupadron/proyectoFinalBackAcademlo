const {Router} = require('express');
const {createBuy} = require('../controllers/order.controller');

const router = Router();

/**
 * @openapi
 * /api/v1/order:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: new order created
 *     tags: [Order]
 *     requestBody:
 *       description: required fields to create at order
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/createProduct'
 *     responses:
 *       201:
 *         description: post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: new order created
 *       400:
 *         description: validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 */

router.post('/', createBuy);

module.exports = router;