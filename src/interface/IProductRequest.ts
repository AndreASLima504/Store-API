interface IProductInterface {
    id?: string;
    name: string;
    description?:string;
    price: number;
    categoryId: string;
}

    export{ IProductInterface }