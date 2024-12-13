import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users-group/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from './files-group/files/files.module';
import { FolderModule } from './files-group/folder/folder.module';
import { AdminModule } from './users-group/admin/admin.module';
import { UnsafeFilesModule } from './files-group/unsafe-files/unsafe-files.module';
import { User } from './users-group/users/entities/user.entity';
import { File } from './files-group/files/entities/file.entity';
import { Admin } from './users-group/admin/entities/admin.entity';
import { Compression } from './files-group/compression/entities/compression.entity';
import { FileHistory } from './files-group/filehistory/entities/filehistory.entity';
import { Folder } from './files-group/folder/entities/folder.entity';
import { UnsafeFile } from './files-group/unsafe-files/entities/unsafe-file.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth-group/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: parseInt(configService.get('DB_PORT')),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          ssl: {
            rejectUnauthorized: false,
          },
          extra: {
            sslmode: 'require',
          },
          entities: [
            User,
            File,
            Admin,
            Compression,
            FileHistory,
            Folder,
            UnsafeFile,
          ],
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
    UsersModule,
    FilesModule,
    FolderModule,
    AdminModule,
    UnsafeFilesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
