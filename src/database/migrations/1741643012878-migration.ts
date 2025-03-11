import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1741643012878 implements MigrationInterface {
    name = 'migration1741643012878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_56f28841fe433cf13f8685f9bc1`");
        await queryRunner.query("ALTER TABLE `user` CHANGE `clientId` `clientId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `store` DROP FOREIGN KEY `FK_403171c8a649b0b9d55d8ccb77c`");
        await queryRunner.query("ALTER TABLE `store` CHANGE `categoryId` `categoryId` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `sale` DROP FOREIGN KEY `FK_bf176f13c0bce3c693b24523794`");
        await queryRunner.query("ALTER TABLE `sale` DROP FOREIGN KEY `FK_c43bdd8ac5fb48ff650c1668225`");
        await queryRunner.query("ALTER TABLE `sale` CHANGE `userId` `userId` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `sale` CHANGE `storeId` `storeId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_ff0c0301a95e517153df97f6812`");
        await queryRunner.query("ALTER TABLE `product` CHANGE `categoryId` `categoryId` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_56f28841fe433cf13f8685f9bc1` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `store` ADD CONSTRAINT `FK_403171c8a649b0b9d55d8ccb77c` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `sale` ADD CONSTRAINT `FK_c43bdd8ac5fb48ff650c1668225` FOREIGN KEY (`storeId`) REFERENCES `store`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `sale` ADD CONSTRAINT `FK_bf176f13c0bce3c693b24523794` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_ff0c0301a95e517153df97f6812` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_ff0c0301a95e517153df97f6812`");
        await queryRunner.query("ALTER TABLE `sale` DROP FOREIGN KEY `FK_bf176f13c0bce3c693b24523794`");
        await queryRunner.query("ALTER TABLE `sale` DROP FOREIGN KEY `FK_c43bdd8ac5fb48ff650c1668225`");
        await queryRunner.query("ALTER TABLE `store` DROP FOREIGN KEY `FK_403171c8a649b0b9d55d8ccb77c`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_56f28841fe433cf13f8685f9bc1`");
        await queryRunner.query("ALTER TABLE `product` CHANGE `categoryId` `categoryId` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_ff0c0301a95e517153df97f6812` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `sale` CHANGE `storeId` `storeId` varchar(36) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `sale` CHANGE `userId` `userId` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `sale` ADD CONSTRAINT `FK_c43bdd8ac5fb48ff650c1668225` FOREIGN KEY (`storeId`) REFERENCES `store`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `sale` ADD CONSTRAINT `FK_bf176f13c0bce3c693b24523794` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `store` CHANGE `categoryId` `categoryId` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `store` ADD CONSTRAINT `FK_403171c8a649b0b9d55d8ccb77c` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` CHANGE `clientId` `clientId` varchar(36) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_56f28841fe433cf13f8685f9bc1` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
    }

}
