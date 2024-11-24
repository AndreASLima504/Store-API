import { getCustomRepository } from "typeorm";
import { IStoreRequest } from "../interface/IStoreRequest";
import { StoreRepositories } from "../repositories/storeRepositories";


class StoreService{
    async createStore({ name, address, description, isOfficial, inOperation, categoryId }: IStoreRequest){
        const storeRepositories = getCustomRepository(StoreRepositories)

        const store = storeRepositories.create({
            name, 
            address, 
            description, 
            isOfficial,
            inOperation,
            categoryId
        });
        await storeRepositories.save(store)

        return store
    }


    async listStores(){
        const storeRepositories = getCustomRepository(StoreRepositories)    
        const stores = await storeRepositories
        .createQueryBuilder("store")
        .innerJoin("store.category", "category")
        .select([
            "store.id AS id",
            "store.name AS name",
            "store.address AS address",
            "store.description AS description",
            "store.isOfficial AS isOfficial",
            "store.inOperation AS inOperation",
            "store.categoryId AS categoryId",
            "category.name AS categoryName",
        ])
        .getRawMany()
        return stores
    }


    async updateStore({id, name, address, description, isOfficial, inOperation, categoryId }: IStoreRequest){
        const storeRepositories = getCustomRepository(StoreRepositories)
        
        const store = await storeRepositories.findOne({
            id,
        });

        if(!store){
            throw new Error("Store not found")
        }

        store.name = name
        store.address = address
        store.description = description
        store.isOfficial = isOfficial
        store.inOperation = inOperation
        store.categoryId = categoryId
        store.categoryId = categoryId
        
        const res = await storeRepositories.save(store)

        return res
    }


    async deleteStore(id){
        const storeRepositories = getCustomRepository(StoreRepositories)
        
        const store = await storeRepositories.findOne({
            id,
        });

        if(!store){
            throw new Error("Store not found")
        }

        await storeRepositories.delete(id)
        var messageDelete = {
            message: "Registro excluido com sucesso"
        }
        return messageDelete
    }
}

export { StoreService }