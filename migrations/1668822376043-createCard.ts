import { MigrationInterface, QueryRunner } from "typeorm";

export class createCard1668822376043 implements MigrationInterface {
    name = 'createCard1668822376043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tag" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "card" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "themeId" integer, CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "theme" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c1934d0b4403bf10c1ab0c18166" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "card" ADD CONSTRAINT "FK_f6c8ecfd9a4812aa0ba72dd3a22" FOREIGN KEY ("themeId") REFERENCES "theme"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card" DROP CONSTRAINT "FK_f6c8ecfd9a4812aa0ba72dd3a22"`);
        await queryRunner.query(`DROP TABLE "theme"`);
        await queryRunner.query(`DROP TABLE "card"`);
        await queryRunner.query(`DROP TABLE "tag"`);
    }

}
