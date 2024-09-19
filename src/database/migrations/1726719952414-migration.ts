import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1726719952414 implements MigrationInterface {
    name = 'migration1726719952414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `product` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `price` int NOT NULL, `categoryId` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `category` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `admin` tinyint NOT NULL, `password` varchar(255) NOT NULL, `clientId` varchar(255) NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `client` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `cpf` varchar(255) NOT NULL, `address` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `sale` (`id` varchar(36) NOT NULL, `userId` varchar(255) NOT NULL, `productId` varchar(255) NOT NULL, `clientId` varchar(255) NOT NULL, `quantity` int NOT NULL, `value` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_ff0c0301a95e517153df97f6812` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_56f28841fe433cf13f8685f9bc1` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_56f28841fe433cf13f8685f9bc1`");
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_ff0c0301a95e517153df97f6812`");
        await queryRunner.query("DROP TABLE `sale`");
        await queryRunner.query("DROP TABLE `client`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `category`");
        await queryRunner.query("DROP TABLE `product`");
    }

}
