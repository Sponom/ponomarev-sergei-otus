import { Inject, Injectable } from '@nestjs/common'
import { CreatePostDto } from 'src/@types'
import { DEFAULT_VALUES, POST_PROVIDER } from 'src/config/constants'
import { Post } from './post.entity'
import { User } from '../user/user.entity'

@Injectable()
export class PostService {
  constructor(@Inject(POST_PROVIDER) private postRepository: typeof Post) {}

  public async find(params: { [key: string]: string }): Promise<Post[]> {
    const { limit = DEFAULT_VALUES.DB_DEFAULT_LIMIT, offset = DEFAULT_VALUES.DB_OFFSET, ...where } = params

    let currentLimit = +limit

    if (currentLimit > DEFAULT_VALUES.DB_MAX_LIMIT) {
      currentLimit = DEFAULT_VALUES.DB_MAX_LIMIT
    }

    return this.postRepository.findAndCountAll({
      where,
      limit: currentLimit,
      offset: +offset
    })
  }

  public async get(id: number): Promise<Post> {
    return this.postRepository.findByPk(id, { include: [
      {
        model: User,
        as: 'user'
      }
    ]})
  }

  public async create(data: CreatePostDto): Promise<Post> {
    return this.postRepository.create(data)
  }

  public async update(id: number, data: CreatePostDto): Promise<Post> {
    return this.postRepository.update(
      data,
      {where: {id} }
      )
  }

  public async delete(id: number): Promise<Post> {
    const post = await this.get(id)

    await post.destroy()
    return post
  }
}
