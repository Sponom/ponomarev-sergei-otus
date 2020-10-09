import { User } from './user.entity'
import { USER_PROVIDER } from '../config/constants';

export const userProviders = [
  {
    provide: USER_PROVIDER,
    useValue: User,
  },
]
