interface ISaleRequest {
    id?: string;
    userId: string;
    products: productToSaleRequest[];
    value?: number;
}

interface productToSaleRequest{
    productId: string,
    quantity: number,
    subtotal?: number
}

    export{ ISaleRequest, productToSaleRequest }