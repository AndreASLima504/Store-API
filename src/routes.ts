import { Router } from "express";

import { AuthenticateUserController } from "./controller/authentication/AuthenticateUserController";
import { ensureAuthenticated} from "./middleware/ensureAuthenticated";

import { UserController } from "./controller/UserController";
import { SaleController } from "./controller/SaleController";
import { ProductController } from "./controller/ProductController";
import { ClientController } from "./controller/ClientController";
import { CategoryController } from "./controller/CategoryController";
const router = Router();

// Importando as controllers
const userController = new UserController();
const saleController = new SaleController();
const clientController = new ClientController();
const productController = new ProductController();
const categoryController = new CategoryController();

const autenticateUserController  = new AuthenticateUserController();


router.post("/login", autenticateUserController.handle);

//Rotas para users
router.get("/users", userController.listUsers);
router.put("/users/:id", userController.updateUser);
router.post("/users", userController.createUser);
router.delete("/users/:id", userController.deleteUser);

// Rotas para sale
router.get("/sales", saleController.listSales)
router.put("/sales/:id", saleController.updateSale)
router.post("/sales", saleController.createSale)
router.delete("/sales/:id", saleController.deleteSale)


router.use(ensureAuthenticated)

export {router} 