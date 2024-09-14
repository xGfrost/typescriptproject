import { Router } from "express";
import userRouters from "./users"
import authRoutes from "./auth";
import productsRoutes from "./products";

const rootRouter: Router = Router();

rootRouter.use('/auth', authRoutes)
rootRouter.use('/products', productsRoutes)
rootRouter.use('/users', userRouters)

export default rootRouter;
