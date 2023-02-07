import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {config} from './orm.config'
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';


@Module({
 // imports: [TypeOrmModule.forRoot(config), UsersModule,AuthModule, ConfigModule.forRoot()],
 imports: [UsersModule, AuthModule,ProductsModule, ConfigModule.forRoot({isGlobal:true}),TypeOrmModule.forRoot(config)],
 controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
