import { ISaleRequest } from "../../interface/ISaleRequest";

    class CreateSaleService {
        async execute ({userId, productId, clientId, quantity, value}: ISaleRequest){
            var vuser = {
                id: 1, userId: userId, productId: productId, clientId: clientId, quantity: quantity, value: value
            }
            console.log("Registro cadastrado com sucesso")
        }
    }
    export { CreateSaleService }