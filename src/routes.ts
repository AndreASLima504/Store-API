import { Router } from "express";

import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { AuthenticateUserController } from "./controller/authentication/AuthenticateUserController";
import { ensureAuthenticated} from "./middleware/ensureAuthenticated";
import { UserController } from "./controller/UserController";
const router = Router();

const userController = new UserController();

const createCategoryController  = new CreateCategoryController();
const listCategoryController  = new ListCategoryController();
const autenticateUserController  = new AuthenticateUserController();


router.post("/login", autenticateUserController.handle);

//Rotas para users
router.get("/users", userController.listUsers);
router.put("/users/:id", userController.updateUser);
router.post("/users", userController.createUser);
router.delete("/users/:id", userController.deleteUser);


router.get("/category", listCategoryController.handle);
router.post("/category", createCategoryController.handle);
router.use(ensureAuthenticated)

export {router} 