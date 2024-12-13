import { Exclude, Expose } from 'class-transformer';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Exclude()
  @Column()
  firstName: string;

  @Exclude()
  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Expose()
  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
