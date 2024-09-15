import { ICategoryInterface } from "../../interface/ICategoryRequest";

    class CreateCategoryService {
        async execute ({ name, description}: ICategoryInterface){
            
            var vuser = {
                id: 1, name: name, description: description
            }
            console.log("Registro incluido com sucesso")
        }
    }
    export { CreateCategoryService }