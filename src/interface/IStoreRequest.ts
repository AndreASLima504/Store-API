interface IStoreRequest{
    id?: string;
    name: string;
    address: string;
    description: string;
    isOfficial: boolean;
    inOperation: boolean;
    categoryId?: string;
}
export {IStoreRequest}