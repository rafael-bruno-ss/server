import { createUser } from './mutations/createUser';
import { updateUser } from './mutations/updateUser';
import { deleteUser } from './mutations/deleteUser';
import { signIn } from './mutations/signIn';

export const userMutations = {
  createUser,
  deleteUser,
  updateUser,
  signIn
};
