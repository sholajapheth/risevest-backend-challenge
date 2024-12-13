// File.entity.ts
import { Folder } from 'src/files-group/folder/entities/folder.entity';
import { User } from 'src/users-group/users/entities/user.entity';
import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from 'typeorm';

@Entity('files')
export class File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  fileType: string;

  @Column()
  size: string;

  @Column()
  uploadedAt: Date;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Folder, { nullable: true })
  folder: Folder;
}
