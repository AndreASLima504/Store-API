import { IProductInterface } from "../../interface/IProductInterface";

    class UpdateProductService {
        async execute ({ id, name, description, price, categoryId}: IProductInterface){
            var vuser = {
                id: id, name: name, description: description, price: price, categoryId: categoryId
            }
            console.log("Registro incluido com sucesso")
        }
    }
    export { UpdateProductService }