import { File } from 'src/files-group/files/entities/file.entity';
import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Compression {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => File)
  @JoinColumn({ name: 'compressedFiles' })
  file: File;

  @Column()
  originalSize: string;

  @Column()
  compressedSize: string;

  @Column()
  compressionMethod: string;

  @Column()
  compressedAt: Date;
}
