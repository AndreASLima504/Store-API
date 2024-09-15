interface ISaleRequest {
    id?: string;
    userId: string;
    productId: string;
    clientId: string;
    quantity: number;
    value: number;
}

    export{ ISaleRequest }