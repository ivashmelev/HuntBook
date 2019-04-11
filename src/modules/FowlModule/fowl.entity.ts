import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Fowl {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; 

  @Column()
  class: string; 

  @Column()
  image : string;

  @Column()
  dateCreated: string; //Datetime

  @Column()
  dateUpdated: string; //Datetime
}