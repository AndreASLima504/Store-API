import { ISaleRequest } from "../../interface/ISaleRequest";

    class UpdateSaleService {
        async execute ({id, userId, productId, clientId, quantity, value}: ISaleRequest){
            var vuser = {
                id: id, userId: userId, productId: productId, clientId: clientId, quantity: quantity, value: value
            }
            console.log("Registro atualizado com sucesso")
        }
    }
    export { UpdateSaleService }