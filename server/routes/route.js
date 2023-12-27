import express from 'express'
import { signup, userLogin } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { addPaymentGateWay } from '../controller/payment-controller.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/login", userLogin);

router.get("/products", getProducts);

router.get('/product/:id', getProductById);
router.post('/payment', addPaymentGateWay);


export default router;