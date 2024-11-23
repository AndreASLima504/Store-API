import { EntityRepository, Repository } from "typeorm";
import { Store } from "../entities/store";

@EntityRepository(Store)
class StoreRepositories extends Repository<Store> {}

export { StoreRepositories };