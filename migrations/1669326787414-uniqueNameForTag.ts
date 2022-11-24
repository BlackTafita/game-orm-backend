import { MigrationInterface, QueryRunner } from "typeorm";

export class uniqueNameForTag1669326787414 implements MigrationInterface {
    name = 'uniqueNameForTag1669326787414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tag" ADD CONSTRAINT "UQ_6a9775008add570dc3e5a0bab7b" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "theme" ADD CONSTRAINT "UQ_5be2c2e7186ad7cbd83f94fb4de" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "theme" DROP CONSTRAINT "UQ_5be2c2e7186ad7cbd83f94fb4de"`);
        await queryRunner.query(`ALTER TABLE "tag" DROP CONSTRAINT "UQ_6a9775008add570dc3e5a0bab7b"`);
    }

}
