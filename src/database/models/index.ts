import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class First extends Model<First> {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;
}
