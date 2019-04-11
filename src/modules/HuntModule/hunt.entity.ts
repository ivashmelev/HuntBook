import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Offer } from '../OfferModule/offer.entity';
import { Fowl } from '../FowlModule/fowl.entity';

@Entity()
export class Hunt {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Offer)
  @JoinColumn({name: 'offerId'})
  offerId: number; 

  @ManyToOne(type => Fowl)
  @JoinColumn({name: 'fowlId'})
  fowlId: number; 

  @Column()
  dayPrice : number;

  @Column()
  licensePrice: number; //Datetime

}