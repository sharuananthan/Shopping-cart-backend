import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {config} from './orm.config'
import { UsersModule } from './users/users.module';


@Module({
 // imports: [TypeOrmModule.forRoot(config), UsersModule,AuthModule, ConfigModule.forRoot()],
 imports: [UsersModule, AuthModule, ConfigModule.forRoot()],
 controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
