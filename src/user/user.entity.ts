import { Entity, Column, ObjectId, ObjectIdColumn } from "typeorm";

@Entity('users')
export class User {
    @ObjectIdColumn() id: ObjectId;
    @Column() name: string;
    @Column() role: string;
}