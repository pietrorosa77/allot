import { ChargingApps } from "./ChargingApps";
import { DmProfileList } from "./DmProfileList";
import { FilteringRules } from "./FilteringRules";
import { GenTopicData } from "./GenTopicData";
import { Arg012 } from "./Arg012";

/**
 * enterpriseDataMediationTopicDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface EnterpriseDataMediationTopicDto {
    /** chargingApps */
    chargingApps?: ChargingApps;
    /** xsd:boolean */
    chargingAppsChanged?: string;
    /** dmProfileList */
    dmProfileList?: DmProfileList;
    /** xsd:boolean */
    dmProfileListChanged?: string;
    /** filteringRules */
    filteringRules?: FilteringRules;
    /** xsd:boolean */
    filteringRulesChanged?: string;
    /** genTopicData */
    genTopicData?: GenTopicData;
    /** xsd:boolean */
    genTopicDataChanged?: string;
    /** xsd:boolean */
    isCli?: string;
    /** policyExcludeListCV */
    policyExcludeListCV?: Arg012;
    /** xsd:boolean */
    policyExcludeListCVChanged?: string;
    /** policyExcludeListVC */
    policyExcludeListVC?: Arg012;
    /** xsd:boolean */
    policyExcludeListVCChanged?: string;
}
