import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export class Login extends Model<Login> {
  @Column
  userName: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  accessLevel: number;

  @Column
  role: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedAt: Date;
}
