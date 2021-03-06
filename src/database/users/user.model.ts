import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  birthday: Date;

  @Column
  get age(): number {
    return new Date().getFullYear() - this.birthday.getFullYear();
  }

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedAt: Date;
}
