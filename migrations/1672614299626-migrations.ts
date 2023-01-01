import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1672614299626 implements MigrationInterface {
    name = 'migrations1672614299626'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card" RENAME COLUMN "title" TO "image"`);
        await queryRunner.query(`ALTER TABLE "card" ALTER COLUMN "image" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card" ALTER COLUMN "image" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "card" RENAME COLUMN "image" TO "title"`);
    }

}
