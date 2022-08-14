import type { User } from './user.models';

export interface IUserRepository {
  /**
   * Used to get information about the user that made the API call
   * @returns Details of the user that mad the api call
   */
  readonly getWhoAmI: () => Promise<User>;
}
