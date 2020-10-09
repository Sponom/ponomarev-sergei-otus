import { Sequelize } from 'sequelize-typescript';
import { DATABASE_PROVIDER } from '../config/constants';
import { dbConfig } from '../config/dbConfig';
import { User } from '../user/user.entity';
import { Post } from '../post/post.entity';

export const databaseProviders = [
  {
    provide: DATABASE_PROVIDER,
    useFactory: async (): Promise<Sequelize> => {
      const sequelize = new Sequelize(dbConfig)
      sequelize.addModels([User, Post])
      await sequelize.sync()
      return sequelize
    },
  },
]
