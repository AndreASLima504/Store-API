import {MigrationInterface, QueryRunner} from "typeorm";

export class sale1726284252375 implements MigrationInterface {
    name = 'sale1726284252375'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `sale` (`id` varchar(255) NOT NULL, `userId` varchar(255) NOT NULL, `productId` varchar(255) NOT NULL, `clientId` varchar(255) NOT NULL, `quantity` varchar(255) NOT NULL, `value` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `admin` tinyint NOT NULL, `password` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `sale`");
    }

}
