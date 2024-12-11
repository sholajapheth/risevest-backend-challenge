import { User } from 'src/users-group/users/entities/user.entity';
import { Column } from 'typeorm';

export class Admin extends User {
  @Column({ default: false })
  isAdmin: boolean;
}
