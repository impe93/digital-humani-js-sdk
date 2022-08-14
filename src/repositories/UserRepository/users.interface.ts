import type { User } from './users.models';

export interface IUsersRepository {
  readonly getWhoAmI: () => Promise<User>;
}
