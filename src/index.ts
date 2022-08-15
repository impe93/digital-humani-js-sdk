import type { IEnterpriseRepository } from './repositories/EnterpriseRepository/enterprise.interface';
import { EnterpriseRepository } from './repositories/EnterpriseRepository/enterprise.repository';
import type { IProjectRepository } from './repositories/ProjectRepository/project.interface';
import { ProjectRepository } from './repositories/ProjectRepository/project.repository';
import type { ITreeRepository } from './repositories/TreeRepository/tree.interface';
import { TreeRepository } from './repositories/TreeRepository/tree.repository';
import type { IUserRepository } from './repositories/UserRepository/user.interface';
import { UserRepository } from './repositories/UserRepository/user.repository';
import { DuHttpClient } from './services/HttpClient/HttpClient';
import type { IHttpClient } from './services/HttpClient/IHttpClient';

/* It's a singleton that provides access to the repositories */
class DigitalHumani {
  private static _instance: DigitalHumani;

  /**
   * The instance of the class to use to calls the SDK methods
   */
  public static get instance(): DigitalHumani {
    if (!this._instance) this._instance = new DigitalHumani();
    return this._instance;
  }

  /**
   * Renamed `instance` for faster use
   */
  public static get i(): DigitalHumani {
    return this.instance;
  }

  /* It's a public property that is readonly and it's type is IProjectRepository. */
  public readonly userRepo: IUserRepository;

  /* It's a public property that is readonly and it's type is IProjectRepository. */
  public readonly treeRepo: ITreeRepository;

  /* It's a public property that is readonly and it's type is IProjectRepository. */
  public readonly enterpriseRepo: IEnterpriseRepository;

  /* It's a public property that is readonly and it's type is IProjectRepository. */
  public readonly projectRepo: IProjectRepository;

  /**
   * The function is a private constructor that creates a new instance of the DuHttpClient class and
   * then creates new instances of the UserRepository, TreeRepository, ProjectRepository, and
   * EnterpriseRepository classes
   */
  private constructor() {
    const httpClient: IHttpClient = new DuHttpClient();

    this.userRepo = new UserRepository(httpClient);
    this.treeRepo = new TreeRepository(httpClient);
    this.projectRepo = new ProjectRepository(httpClient);
    this.enterpriseRepo = new EnterpriseRepository(httpClient);
  }
}

export default DigitalHumani;
