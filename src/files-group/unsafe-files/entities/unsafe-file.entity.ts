import { File } from 'src/files-group/files/entities/file.entity';
import {
  Admin,
  Column,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class UnsafeFile {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => File)
  @JoinColumn({ name: 'unsafeFiles' })
  file: File;

  @ManyToOne(() => Admin)
  markedBy: Admin;

  @Column()
  markedAt: Date;
}
