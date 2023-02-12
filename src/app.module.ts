import { Module } from '@nestjs/common';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
 // imports: [TypeOrmModule.forRoot(config), UsersModule,AuthModule, ConfigModule.forRoot()],
 imports: [UsersModule, AuthModule,ProductsModule, ConfigModule.forRoot({isGlobal:true}),TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      
        type:'postgres',
        username:'postgres',
        password:'sharu',
        port:5432,
        host:'127.0.0.1',
        database:'shopping_db',
        synchronize:false,
        autoLoadEntities:true,
        entities: ['dist/**/*.entity{.ts,.js}'],
    
 }),
    inject: [ConfigService],
  })
],
 controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
