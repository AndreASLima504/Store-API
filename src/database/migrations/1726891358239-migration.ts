import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1726891358239 implements MigrationInterface {
    name = 'migration1726891358239'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `product_sales_sale` (`productId` varchar(36) NOT NULL, `saleId` varchar(36) NOT NULL, INDEX `IDX_e9ea80e32da884d6fa0921373f` (`productId`), INDEX `IDX_85650b1e35f3bfd991a0cbc87a` (`saleId`), PRIMARY KEY (`productId`, `saleId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_56f28841fe433cf13f8685f9bc1`");
        await queryRunner.query("ALTER TABLE `user` CHANGE `clientId` `clientId` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_56f28841fe433cf13f8685f9bc1` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `product_sales_sale` ADD CONSTRAINT `FK_e9ea80e32da884d6fa0921373f7` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `product_sales_sale` ADD CONSTRAINT `FK_85650b1e35f3bfd991a0cbc87ae` FOREIGN KEY (`saleId`) REFERENCES `sale`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product_sales_sale` DROP FOREIGN KEY `FK_85650b1e35f3bfd991a0cbc87ae`");
        await queryRunner.query("ALTER TABLE `product_sales_sale` DROP FOREIGN KEY `FK_e9ea80e32da884d6fa0921373f7`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_56f28841fe433cf13f8685f9bc1`");
        await queryRunner.query("ALTER TABLE `user` CHANGE `clientId` `clientId` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_56f28841fe433cf13f8685f9bc1` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("DROP INDEX `IDX_85650b1e35f3bfd991a0cbc87a` ON `product_sales_sale`");
        await queryRunner.query("DROP INDEX `IDX_e9ea80e32da884d6fa0921373f` ON `product_sales_sale`");
        await queryRunner.query("DROP TABLE `product_sales_sale`");
    }

}
