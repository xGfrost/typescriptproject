import { Router } from "express";
import { errorHandler } from "../error-handler";
import authMiddleware from "../middleware/auth";
import adminMiddleware from "../middleware/admin";
import { addADdress, deleteADdress, listADdress } from "../controllers/users";

const userRouters: Router = Router()

userRouters.post('/address', [authMiddleware], errorHandler(addADdress))
userRouters.post('/address/delete/:id', [authMiddleware], errorHandler(deleteADdress))
userRouters.get('/address', [authMiddleware], errorHandler(listADdress))

export default userRouters