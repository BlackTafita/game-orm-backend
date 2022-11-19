import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./tag.entity";
import { Theme } from "./theme.entity";

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToMany(() => Tag)
    @JoinTable()
    tags: Tag[];

    @ManyToOne(() => Theme, (theme) => theme.cards)
    theme: Theme;

}