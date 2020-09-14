import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../database/models/user/user.model';
import { throwError } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  remove(id: string): void {
    this.findOne(id)
      .then(user => user.destroy())
      .catch(err =>
        throwError(
          `Something went wrong when deleting user. Description: ${err}`,
        ),
      );
  }
}
