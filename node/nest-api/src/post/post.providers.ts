import { Post } from './post.entity';
import { POST_PROVIDER } from '../config/constants';

export const postProviders = [
  {
    provide: POST_PROVIDER,
    useValue: Post,
  },
]
