import { MigrationInterface, QueryRunner } from "typeorm";

export class addTagsRel1668885757549 implements MigrationInterface {
    name = 'addTagsRel1668885757549'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "card_tags_tag" ("cardId" integer NOT NULL, "tagId" integer NOT NULL, CONSTRAINT "PK_c94b751071604e9ab538a0f6ddc" PRIMARY KEY ("cardId", "tagId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ca4c05beb77cfcb3889cd876c4" ON "card_tags_tag" ("cardId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ffe28bcbb12fa7f36038197b2e" ON "card_tags_tag" ("tagId") `);
        await queryRunner.query(`ALTER TABLE "card_tags_tag" ADD CONSTRAINT "FK_ca4c05beb77cfcb3889cd876c47" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "card_tags_tag" ADD CONSTRAINT "FK_ffe28bcbb12fa7f36038197b2ed" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card_tags_tag" DROP CONSTRAINT "FK_ffe28bcbb12fa7f36038197b2ed"`);
        await queryRunner.query(`ALTER TABLE "card_tags_tag" DROP CONSTRAINT "FK_ca4c05beb77cfcb3889cd876c47"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ffe28bcbb12fa7f36038197b2e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ca4c05beb77cfcb3889cd876c4"`);
        await queryRunner.query(`DROP TABLE "card_tags_tag"`);
    }

}
