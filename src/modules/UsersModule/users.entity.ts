import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserType {
  admin = "Администратор",
  hunter = "Охотник",
  guide = "Егерь"
}

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: UserType,
    default: UserType.hunter
  })
  type: UserType

  @Column()
  phone: string; 

  @Column()
  email: string; 

  @Column()
  dateCreated: string; //Datetime

  @Column()
  dateUpdated: string; //Datetime

}