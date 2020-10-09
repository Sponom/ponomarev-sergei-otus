import { Inject, Injectable } from '@nestjs/common'
import { CreateUserDto } from 'src/@types'
import { DEFAULT_VALUES, USER_PROVIDER } from 'src/config/constants'
import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(@Inject(USER_PROVIDER) private userRepository: typeof User) {}

  public async find(params: { [key: string]: string }): Promise<User[]> {
    const { limit = DEFAULT_VALUES.DB_DEFAULT_LIMIT, offset = DEFAULT_VALUES.DB_OFFSET, ...where } = params

    let currentLimit = +limit

    if (currentLimit > DEFAULT_VALUES.DB_MAX_LIMIT) {
      currentLimit = DEFAULT_VALUES.DB_MAX_LIMIT
    }

    return this.userRepository.findAndCountAll({
      where,
      limit: currentLimit,
      offset: +offset
    })
  }

  public async get(id: number): Promise<User> {
    return this.userRepository.findByPk(id)
  }

  public async create(data: CreateUserDto): Promise<User> {
    return this.userRepository.create(data)
  }

  public async update(id: number, data: CreateUserDto): Promise<User> {
    return this.userRepository.update(data, {where: {id}})
  }

  public async delete(id: number): Promise<User> {
    const user = await this.get(id)

    await user.destroy()
    return user
  }
}

