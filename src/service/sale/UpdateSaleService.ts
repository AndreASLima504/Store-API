import { ISaleInterface } from "../../interface/ISaleInterface";

    class UpdateSaleService {
        async execute ({id, userId, productId, clientId, quantity, value}: ISaleInterface){
            var vuser = {
                id: id, userId: userId, productId: productId, clientId: clientId, quantity: quantity, value: value
            }
            console.log("Registro atualizado com sucesso")
        }
    }
    export { UpdateSaleService }