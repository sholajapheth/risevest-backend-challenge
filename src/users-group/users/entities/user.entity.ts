import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
