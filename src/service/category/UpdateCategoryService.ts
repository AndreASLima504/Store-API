import { ICategoryRequest } from "../../interface/ICategoryRequest";

    class UpdateCategoryService {
        async execute ({ id, name, description}: ICategoryRequest){
            
            var vuser = {
                id: id, name: name, description: description
            }
            console.log("Registro atualizado com sucesso")
        }
    }
    export { UpdateCategoryService }