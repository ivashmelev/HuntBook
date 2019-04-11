import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from '../UsersModule/users.entity';

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

  @ManyToOne(type => Users)
  @JoinColumn({name: 'guideId'})
  guideId: number;

  @Column()
  dateCreated: string; //Datetime

  @Column()
  dateUpdated: string; //Datetime
}