import type { IHttpClient } from '../../services/HttpClient/IHttpClient';
import type { IUsersRepository } from './users.interface';
import type { User } from './users.models';

export class UsersRepository implements IUsersRepository {
  constructor(private httpClient: IHttpClient) {}

  public readonly getWhoAmI = async () => {
    return this.httpClient.get<User>('/user/whoami');
  };
}
