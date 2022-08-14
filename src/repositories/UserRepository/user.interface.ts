import type { User } from './user.models';

export interface IUserRepository {
  readonly getWhoAmI: () => Promise<User>;
}
