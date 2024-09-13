import {MigrationInterface, QueryRunner} from "typeorm";

export class sale1726195301009 implements MigrationInterface {
    name = 'sale1726195301009'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `admin` tinyint NOT NULL, `password` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user`");
    }

}
