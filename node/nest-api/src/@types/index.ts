export type User = {
  id: number
  username: string
  firstName: string
  lastName: string
  state: BasicState
  createdAt: Date
  updatedAt: Date
}

export enum BasicState {
  ACTIVE,
  INACTIVE,
  DELETED,
}

export interface CreateUserDto {
  firstName: string
  lastName: string
  state: BasicState
}

export type Post = {
  id: number
  title: string,
  description: string,
  content: string
  createdAt: Date
  updatedAt: Date,
  userId: number
}

export interface CreatePostDto {
  title: string,
  description: string,
  content: string
}
