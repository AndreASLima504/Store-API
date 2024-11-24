import { Request, Response } from "express";
import { ProductService } from "../service/ProductService";
import { StoreService } from "../service/StoreService";

class StoreController{
    async createStore(request: Request, response: Response) {
        const {name, address, description, isOfficial, inOperation, categoryId} = request.body;
        const store = 
        {
            name: name,
            address: address,
            description: description,
            isOfficial: isOfficial,
            inOperation: inOperation,
            categoryId:categoryId
        };
        const storeService = new StoreService()
        const res =  await storeService.createStore(store)
        return response.json(res);
    } 

    async listStores(request: Request, response: Response){
        const storeService = new StoreService()
        const stores = await storeService.listStores()

        const res = response.json(stores)
        return res
    }


    async updateStore(request: Request, response: Response) {
        const {name, address, description, isOfficial, inOperation, categoryId} = request.body;

        const id = request.params.id;

        const store = 
        {
            id: id,
            name: name,
            address: address,
            description: description,
            isOfficial: isOfficial,
            inOperation: inOperation,
            categoryId:categoryId
        };

        const storeService = new StoreService()
        const res =  await storeService.updateStore(store)
        return response.json(res);
    }

    async deleteStore(request: Request, response: Response){
        const id = request.params.id

        const storeService = new StoreService()
        const res = await storeService.deleteStore(id)
        
        return response.json(res)
    }
}

export { StoreController }