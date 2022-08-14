import type { IEnterpriseRepository } from './repositories/EnterpriseRepository/enterprise.interface';
import { EnterpriseRepository } from './repositories/EnterpriseRepository/enterprise.repository';
import type { IProjectRepository } from './repositories/ProjectRepository/project.interface';
import { ProjectRepository } from './repositories/ProjectRepository/project.repositories';
import type { ITreeRepository } from './repositories/TreeRepository/tree.interface';
import { TreeRepository } from './repositories/TreeRepository/tree.repository';
import type { IUserRepository } from './repositories/UserRepository/user.interface';
import { UserRepository } from './repositories/UserRepository/user.repository';
import { DuHttpClient } from './services/HttpClient/HttpClient';
import type { IHttpClient } from './services/HttpClient/IHttpClient';

/* It's a singleton that provides access to the repositories */
class DigitalHumani {
  private static _instance: DigitalHumani;

  public static get instance(): DigitalHumani {
    if (!this._instance) this._instance = new DigitalHumani();
    return this._instance;
  }

  public static get i(): DigitalHumani {
    return this.instance;
  }

  public readonly userRepo: IUserRepository;
  public readonly treeRepo: ITreeRepository;
  public readonly enterpriseRepo: IEnterpriseRepository;
  public readonly projectRepo: IProjectRepository;

  private constructor() {
    const httpClient: IHttpClient = new DuHttpClient();

    this.userRepo = new UserRepository(httpClient);
    this.treeRepo = new TreeRepository(httpClient);
    this.projectRepo = new ProjectRepository(httpClient);
    this.enterpriseRepo = new EnterpriseRepository(httpClient);
  }
}

export default DigitalHumani;
