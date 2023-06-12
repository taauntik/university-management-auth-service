import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

export const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId()
  // default password
  user.id = id
  if (!user.password) {
    user.password = config.default_user_password as string
  }

  const createdUser = await User.create(user)

  if (!createUser) {
    throw new Error('Failed to create user')
  }

  return createdUser
}

export default {
  createUser,
}
