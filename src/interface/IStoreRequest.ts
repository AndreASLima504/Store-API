interface IStoreRequest{
    id?: string;
    name: string;
    address: string;
    rating: string
    isOfficial: boolean;
    inOperation: boolean;
    categoryId: string;
}
export {IStoreRequest}