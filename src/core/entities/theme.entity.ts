import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Theme {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}