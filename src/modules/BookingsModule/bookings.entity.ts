import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn,  } from 'typeorm';
import { Users } from '../UsersModule/users.entity';
import { Hunt } from '../HuntModule/hunt.entity';

@Entity()
export class Bookings {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Hunt)
  @JoinColumn({name: 'huntId'})
  offerId: number; 

  @ManyToOne(type => Users)
  @JoinColumn({name: 'hunterId'})
  hunterId: number

  @Column('boolean')
  confirmed: boolean; 

  @Column()
  dateCreated: string; //Datetime

  @Column()
  dateUpdated: string; //Datetime

}