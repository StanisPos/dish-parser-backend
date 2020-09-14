import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersService } from '../../services/users';
import { User } from '../../database/models/user/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService],
})
export class UsersModule {}
