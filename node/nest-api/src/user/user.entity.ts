import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  AutoIncrement,
  DataType,
  Length,
  HasMany
} from 'sequelize-typescript'
import { BasicState } from 'src/@types'
import { Post } from '../post/post.entity'

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @AutoIncrement
  @Column({
    primaryKey: true,
  })
  id: number

  @Length({min: 5, max: 20})
  @Column({ unique: true })
  username: string

  @Column({})
  firstName: string

  @Column
  lastName: string

  @Column(DataType.ENUM(...Object.keys(BasicState)))
  state: BasicState

  @HasMany(() => Post)
  posts: Post[];


  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  // Soft delete
  @DeletedAt
  deletedAt: Date
}
