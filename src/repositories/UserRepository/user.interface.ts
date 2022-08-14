import type { User } from './user.models';

export interface IUsersRepository {
  readonly getWhoAmI: () => Promise<User>;
}
