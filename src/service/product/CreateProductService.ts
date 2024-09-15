import { IProductInterface } from "../../interface/IProductRequest";

    class CreateProductService {
        async execute ({ name, description, price, categoryId}: IProductInterface){
            var vuser = {
                id: 1, name: name, description: description, price: price, categoryId: categoryId
            }
            console.log("Registro incluido com sucesso")
        }
    }
    export { CreateProductService }