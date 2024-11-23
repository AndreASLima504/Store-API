import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1732395957062 implements MigrationInterface {
    name = 'migration1732395957062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `profile` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `store` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `address` varchar(255) NOT NULL, `rating` int NOT NULL, `isOfficial` tinyint NOT NULL, `inOperation` tinyint NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `categoryId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` ADD `profileId` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_56f28841fe433cf13f8685f9bc1`");
        await queryRunner.query("ALTER TABLE `user` CHANGE `clientId` `clientId` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_56f28841fe433cf13f8685f9bc1` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_9466682df91534dd95e4dbaa616` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `store` ADD CONSTRAINT `FK_403171c8a649b0b9d55d8ccb77c` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `store` DROP FOREIGN KEY `FK_403171c8a649b0b9d55d8ccb77c`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_9466682df91534dd95e4dbaa616`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_56f28841fe433cf13f8685f9bc1`");
        await queryRunner.query("ALTER TABLE `user` CHANGE `clientId` `clientId` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_56f28841fe433cf13f8685f9bc1` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `profileId`");
        await queryRunner.query("DROP TABLE `store`");
        await queryRunner.query("DROP TABLE `profile`");
    }

}
