import { Router } from "express";
import { errorHandler } from "../error-handler";
import { createProduct, deleteProduct, getProductById, listProduct, updateProduct } from "../controllers/products";
import authMiddleware from "../middleware/auth";
import adminMiddleware from "../middleware/admin";

const productsRoutes:Router = Router()

productsRoutes.post('/',[authMiddleware, adminMiddleware], errorHandler(createProduct))

productsRoutes.post('/update/:id',[authMiddleware, adminMiddleware], errorHandler(updateProduct))

productsRoutes.post('/delete/:id',[authMiddleware, adminMiddleware], errorHandler(deleteProduct))

productsRoutes.get('/',[authMiddleware, adminMiddleware], errorHandler(listProduct))

productsRoutes.get('/:id',[authMiddleware, adminMiddleware], errorHandler(getProductById))

export default productsRoutes