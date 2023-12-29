import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id1: number;

    @Column()
    id2: number;

    @Column({type: "varchar", name: "user_id"})
    userId: string;
}