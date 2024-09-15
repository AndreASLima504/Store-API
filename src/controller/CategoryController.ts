import { CategoryService } from "../service/CategoryService"
import { Request, Response } from "express"

class CategoryController{
    async createCategory(request: Request, response: Response) {
        const {name, description } = request.body;
        console.log(name)
        console.log(description)

        const category = 
        {
            name:name,
            description:description
        };
        const categoryService = new CategoryService()
        const ret =  await categoryService.createCategory(category)
        return response.json(ret);
    }

    async listCategories(request: Request, response: Response){
        const categoryService = new CategoryService()
        const categories = await categoryService.listCategories()
        return response.json(categories)
    }


    async updateCategory(request: Request, response: Response) {
        const {name, description } = request.body;

        const id = request.params.id;

        const category = 
        {
            id:id,
            name:name,
            description:description
        };
        const categoryService = new CategoryService()
        const ret =  await categoryService.updateCategory(category)
        return response.json(ret);
    }

    async deleteCategory(request: Request, response: Response){
        const id = request.params.id
        const categoryService = new CategoryService()
        
        console.log("AAAA")
        const res = await categoryService.deleteCategory(id)
        return response.json(res)
    }
}

export {CategoryController}