import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUserController } from "./controller/user/ListUserController";
import { UpdateUserController } from "./controller/user/UpdateUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";
import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { AuthenticateUserController } from "./controller/authentication/AuthenticateUserController";
import { ensureAuthenticated} from "./middleware/ensureAuthenticated";

const router = Router();
const createUserController  = new CreateUserController();
const listUsersController  = new ListUserController();
const updateUserController  = new UpdateUserController();
const deleteUserController  = new DeleteUserController();
const createCategoryController  = new CreateCategoryController();
const listCategoryController  = new ListCategoryController();
const autenticateUserController  = new AuthenticateUserController();


router.post("/login", autenticateUserController.handle);
router.post("/users", createUserController.handle);

router.get("/users", listUsersController.handle);
router.put("/users/:id", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);
router.post("/category", createCategoryController.handle);
router.get("/category", listCategoryController.handle);
router.use(ensureAuthenticated)

export {router} 