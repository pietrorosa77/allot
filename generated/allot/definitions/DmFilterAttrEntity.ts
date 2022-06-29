import { DmRuleEntity } from "./DmRuleEntity";

/**
 * DmFilterAttrEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmFilterAttrEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** dmRuleEntity */
    dmRuleEntity?: DmRuleEntity;
    /** xsd:string */
    key?: string;
    /** xsd:string */
    value?: string;
}
