import { IProductRequest } from "../../interface/IProductRequest";

    class CreateProductService {
        async execute ({ name, description, price, categoryId}: IProductRequest){
            var vuser = {
                id: 1, name: name, description: description, price: price, categoryId: categoryId
            }
            console.log("Registro incluido com sucesso")
        }
    }
    export { CreateProductService }