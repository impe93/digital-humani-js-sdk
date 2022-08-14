import type { IHttpClient } from '../../services/HttpClient/IHttpClient';
import type { IUsersRepository } from './user.interface';
import type { User } from './user.models';

export class UsersRepository implements IUsersRepository {
  constructor(private httpClient: IHttpClient) {}

  public readonly getWhoAmI = async () => {
    return this.httpClient.get<User>('/user/whoami');
  };
}
