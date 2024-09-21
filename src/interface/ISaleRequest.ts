interface ISaleRequest {
    id?: string;
    userId: string;
    products: string[];
    clientId: string;
    quantity: number;
    value: number;
}

    export{ ISaleRequest }