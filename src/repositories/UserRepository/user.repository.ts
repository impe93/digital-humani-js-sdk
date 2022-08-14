import type { IHttpClient } from '../../services/HttpClient/IHttpClient';
import type { IUserRepository } from './user.interface';
import type { User } from './user.models';

export class UserRepository implements IUserRepository {
  constructor(private httpClient: IHttpClient) {}

  public readonly getWhoAmI = async () => {
    return this.httpClient.get<User>('/user/whoami');
  };
}
