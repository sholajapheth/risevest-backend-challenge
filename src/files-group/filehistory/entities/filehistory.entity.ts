import { File } from 'src/files-group/files/entities/file.entity';
import { Admin, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FileHistoryAction } from '../enums/file-history.enum';
import { User } from 'src/users-group/users/entities/user.entity';

export class FileHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => File)
  file: File;

  @Column({ type: 'enum', enum: FileHistoryAction })
  action: FileHistoryAction;

  @Column()
  timestamp: Date;

  @ManyToOne(() => User)
  performedByUser: User;

  @ManyToOne(() => Admin)
  performedByAdmin: Admin;
}
