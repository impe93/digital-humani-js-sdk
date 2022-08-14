import type { IHttpClient } from '../../services/HttpClient/IHttpClient';
import type { IUserRepository } from './user.interface';
import type { User } from './user.models';
export declare class UserRepository implements IUserRepository {
    private httpClient;
    constructor(httpClient: IHttpClient);
    readonly getWhoAmI: () => Promise<User>;
}
//# sourceMappingURL=user.repository.d.ts.map