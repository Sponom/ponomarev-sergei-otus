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
import { CreatePostDto, Post as PostType } from 'src/@types'
import { PostService } from './post.service'

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('')
  public async find(@Query() params: { [key: string]: string }): Promise<PostType[]> {
    return this.postService.find(params)
  }

  @Get(':id')
  public async get(@Param('id', ParseIntPipe) id: number): Promise<PostType> {
    const post = await this.postService.get(id);

    if (!post) {
      throw new NotFoundException()
    }

    return post
  }

  @Post()
  public async create(@Body() data: CreatePostDto): Promise<PostType> {
    return this.postService.create(data)
  }

  @Put(':id')
  public async update(@Param('id', ParseIntPipe) id: number, @Body() data: CreatePostDto): Promise<PostType> {
    return this.postService.update(id, data)
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<PostType> {
    return this.postService.delete(id)
  }
}
