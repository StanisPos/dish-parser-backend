import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { throwError } from 'rxjs';
import { User } from './user.model';
import { Sequelize } from 'sequelize-typescript';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private readonly sequelize: Sequelize,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.birthday = createUserDto.birthday;

    return user.save();
  }

  async findAll(): Promise<User[]> {
    try {
      await this.sequelize.transaction(async t => {
        const transactionHost = {
          transaction: t,
        };

        await this.userModel.create(
          {
            firstName: 'first test Test',
            lastName: 'last name Test',
            birthday: new Date('1990'),
          },
          transactionHost,
        );

        await this.userModel.create(
          {
            firstName: 'first test Test2',
            lastName: 'last name Test2',
            birthday: new Date('1995'),
          },
          transactionHost,
        );
      });
    } catch (err) {
      throwError(`Transaction has been rolled back, ${err}`);
    }

    return this.userModel.findAll();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    try {
      const user = await this.findOne(id);
      await user.destroy();
    } catch (err) {
      throwError(
        `Something went wrong when deleting user. Description: ${err}`,
      );
    }
  }
}
