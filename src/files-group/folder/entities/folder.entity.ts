// Folder.entity.ts
import { User } from 'src/users-group/users/entities/user.entity';
import { PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

export class Folder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  createdAt: Date;

  @ManyToOne(() => User, { nullable: false })
  user: User;
}
