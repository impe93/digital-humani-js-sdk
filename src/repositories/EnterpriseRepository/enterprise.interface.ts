import type {
  Count,
  Enterprise,
  GetTreeCountRequest,
} from './enterprise.models';

export interface IEnterpriseRepository {
  /**
   * This method is used to get an enterprise by its ID
   * @param enterpriseId Enterprise ID, is used to get the right enterprise details
   * @returns The associated enterprise
   */
  readonly getEnterprise: (enterpriseId: string) => Promise<Enterprise>;
  /**
   *
   * @param param this object, to be compliant should have at least `enterpriseId` and `month`, or `enterpriseId`,
   * `startDate` and `endDate`. `month` should has this format `YYYY-MM`, startDate and endDate this `YYYY-MM-DD`
   * @returns an object with `count` field that rapresent the enterprise buyed trees.
   * @throws Throw an error when the explained parameters logic is not satisfied.
   */
  readonly getTreeCount: (params: GetTreeCountRequest) => Promise<Count>;
}
