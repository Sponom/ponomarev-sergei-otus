import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  AutoIncrement,
  Length,
  ForeignKey,
  BelongsTo,
  BeforeCreate
} from 'sequelize-typescript'
import { User } from '../user/user.entity'

@Table({ tableName: 'posts' })
export class Post extends Model<Post> {
  @AutoIncrement
  @Column({
    primaryKey: true,
  })
  id: number

  @Length({min: 5})
  @Column({})
  title: string

  @Column({})
  description: string

  @Column
  content: string

  @ForeignKey(() => User)
  @Column
  userId: number

  @BelongsTo(() => User, 'userId')
  user: User

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  // Soft delete
  @DeletedAt
  deletedAt: Date

  @BeforeCreate
  static checkContent(post: Post) {
    post.content = post.content.toLowerCase()
  }
}
