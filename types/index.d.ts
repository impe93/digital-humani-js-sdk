import type { IEnterpriseRepository } from './repositories/EnterpriseRepository/enterprise.interface';
import type { IProjectRepository } from './repositories/ProjectRepository/project.interface';
import type { ITreeRepository } from './repositories/TreeRepository/tree.interface';
import type { IUserRepository } from './repositories/UserRepository/user.interface';
declare class DigitalHumani {
    private static _instance;
    static get instance(): DigitalHumani;
    static get i(): DigitalHumani;
    readonly userRepo: IUserRepository;
    readonly treeRepo: ITreeRepository;
    readonly enterpriseRepo: IEnterpriseRepository;
    readonly projectRepo: IProjectRepository;
    private constructor();
}
export default DigitalHumani;
//# sourceMappingURL=index.d.ts.map