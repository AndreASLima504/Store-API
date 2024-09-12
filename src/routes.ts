import { Router } from "express";
// User 
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUserController } from "./controller/user/ListUserController";
import { UpdateUserController } from "./controller/user/UpdateUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";
// Category
import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { UpdateCategoryController } from "./controller/category/UpdateCategoryController";
import { DeleteCategoryController } from "./controller/category/DeleteCategoryController";
// Client
import { CreateClientController } from "./controller/client/CreateClientController";
import { ListClientController } from "./controller/client/ListClientController";
import { UpdateClientController } from "./controller/client/UpdateClientController";
import { DeleteClientController } from "./controller/client/DeleteClientController";
// Product
import { CreateProductController } from "./controller/product/CreateProductController";
import { ListProductController } from "./controller/product/ListProductController";
import { UpdateProductController } from "./controller/product/UpdateProductController";
import { DeleteProductController } from "./controller/product/DeleteProductController";
// Sale
import { CreateSaleController } from "./controller/sale/CreateSaleController";
import { ListSaleController } from "./controller/sale/ListSaleController";
import { UpdateSaleController } from "./controller/sale/UpdateSaleController";
import { DeleteSaleController } from "./controller/sale/DeleteSaleController";
// Auth
import { AuthenticateUserController } from "./controller/authentication/AuthenticateUserController";

const router = Router();


// User

const createUserController = new CreateUserController();
router.post("/usersCreate", createUserController.handle);

const listUserController = new ListUserController();
router.get("/usersList", listUserController.handle);

const updateUserController = new UpdateUserController();
router.put("/usersUpdate/:id", updateUserController.handle);

const deleteUserController = new DeleteUserController();
router.delete("/usersDelete/:id", deleteUserController.handle);

// Category

const createCategoryController = new CreateCategoryController();
router.post("/categoryCreate", createCategoryController.handle);

const listCategoryController = new ListCategoryController();
router.get("/categoryList", listCategoryController.handle);

const updateCategoryController = new UpdateCategoryController();
router.put("/categoryUpdate/:id", updateCategoryController.handle);

const deleteCategoryController = new DeleteCategoryController();
router.delete("/categoryDelete/:id", deleteCategoryController.handle);

// Client

const createClientController = new CreateClientController();
router.post("/clientCreate", createClientController.handle);

const listClientController = new ListClientController();
router.get("/clientList", listClientController.handle);

const updateClientController = new UpdateClientController();
router.put("/clientUpdate/:id", updateClientController.handle);

const deleteClientController = new DeleteClientController();
router.delete("/clientDelete/:id", deleteClientController.handle);

// Product

const createProductController = new CreateProductController();
router.post("/productCreate", createProductController.handle);

const listProductController = new ListProductController();
router.get("/productList", listProductController.handle);

const updateProductController = new UpdateProductController();
router.put("/productUpdate/:id", updateProductController.handle);

const deleteProductController = new DeleteProductController();
router.delete("/productDelete/:id", deleteProductController.handle);

// Sale

const createSaleController = new CreateSaleController();
router.post("/saleCreate", createSaleController.handle);

const listSaleController = new ListSaleController();
router.get("/saleList", listSaleController.handle);

const updateSaleController = new UpdateSaleController();
router.put("/saleUpdate/:id", updateSaleController.handle);

const deleteSaleController = new DeleteSaleController();
router.delete("/saleDelete/:id", deleteSaleController.handle);

// Auth

const authenticateUserController = new AuthenticateUserController();
router.post("/authLogin", authenticateUserController.handle);

import { ensureAuthenticated } from "./middleware/ensureAuthenticated"

router.use(ensureAuthenticated)


export {router};