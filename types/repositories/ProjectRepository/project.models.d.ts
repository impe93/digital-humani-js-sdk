export interface Project {
    id: string;
    name: string;
    description: string;
    created: string;
    updated: string;
    reforestationProjectImageURL_en: string;
    reforestationCompanyName_en: string;
    reforestationProjectCountry_en: string;
    reforestationProjectState_en?: string;
    reforestationCompanyAddress_en: string;
    reforestationProjectWebsite_en: string;
    reforestationProjectDescription_en: string;
    reforestationCompanyWebsite_en: string;
    reforestationCompanyName_fr: string;
    reforestationProjectWebsite_fr: string;
    reforestationProjectCountry_fr: string;
    reforestationProjectState_fr?: string;
    reforestationProjectDescription_fr: string;
    reforestationCompanyWebsite_fr: string;
    reforestationCompanyAddress_fr: string;
    reforestationProjectImageURL_fr: string;
}
export declare type ProjectPartial = Pick<Project, 'id' | 'name' | 'reforestationProjectDescription_en' | 'reforestationProjectState_en' | 'reforestationProjectCountry_en' | 'reforestationProjectWebsite_en' | 'reforestationCompanyName_en'>;
//# sourceMappingURL=project.models.d.ts.map