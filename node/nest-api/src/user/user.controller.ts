import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common'
import { CreateUserDto, User } from 'src/@types'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  public async find(@Query() params: { [key: string]: string }): Promise<User[]> {
    return this.userService.find(params)
  }

  @Get(':id')
  public async get(@Param('id', ParseIntPipe) id: number): Promise<User> {
    const user = await this.userService.get(id)

    if (!user) {
      throw new NotFoundException()
    }

    return user
  }

  @Post()
  public async create(@Body() data: CreateUserDto): Promise<User> {
    return this.userService.create(data)
  }

  @Put(':id')
  public async update(@Param('id', ParseIntPipe) id: number, @Body() data: CreateUserDto): Promise<User> {
    return this.userService.update(id, data)
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.delete(id)
  }
}
