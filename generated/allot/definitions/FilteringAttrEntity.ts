import { DmFilterRuleEntity } from "./DmFilterRuleEntity";

/**
 * FilteringAttrEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface FilteringAttrEntity {
    /** filteringRuleEntity */
    filteringRuleEntity?: DmFilterRuleEntity;
    /** xsd:int */
    id?: string;
    /** xsd:string */
    key?: string;
    /** xsd:string */
    value?: string;
}
