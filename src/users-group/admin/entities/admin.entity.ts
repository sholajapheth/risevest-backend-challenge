import { User } from 'src/users-group/users/entities/user.entity';
import { Column, Entity } from 'typeorm';

@Entity('admins')
export class Admin extends User {
  @Column({ default: false })
  isAdmin: boolean;
}
