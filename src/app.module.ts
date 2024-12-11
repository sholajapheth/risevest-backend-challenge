import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users-group/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from './files-group/files/files.module';
import { FolderModule } from './files-group/folder/folder.module';
import { AdminModule } from './users-group/admin/admin.module';
import { UnsafeFilesModule } from './files-group/unsafe-files/unsafe-files.module';

// postgresql://risevest_backend_challenge_db_owner:ABz7njVfbh0I@ep-orange-mode-a5cnj9pe.us-east-2.aws.neon.tech/risevest_backend_challenge_db?sslmode=require

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-orange-mode-a5cnj9pe.us-east-2.aws.neon.tech',
      port: 3306,
      username: 'risevest_backend_challenge_db_owner',
      password: 'ABz7njVfbh0I',
      database: 'risevest_backend_challenge_db',
      entities: [],
      synchronize: process.env.NODE_ENV === 'development',
    }),
    FilesModule,
    FolderModule,
    AdminModule,
    UnsafeFilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
