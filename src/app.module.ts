import { config } from 'dotenv';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './database/users/user.module';

config();

const dbPort = Number(process.env.PORT_DB);
const dbUserName = process.env.ADMIN_DB;
const dbName = process.env.NAME_DB;
const dbPassword = process.env.PASS_DB;

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: dbPort,
      username: dbUserName,
      password: dbPassword,
      database: dbName,
      autoLoadModels: true,
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
