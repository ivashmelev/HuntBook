import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateStart: string; //Datetime

  @Column()
  dateEnd: string; //Datetime

  @Column({ length: 500})
  description: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column()
  guideId: number;

  @Column()
  dateCreated: string; //Datetime

  @Column()
  dateUpdated: string; //Datetime
}