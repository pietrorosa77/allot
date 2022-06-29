import { AttrList } from "./AttrList";

/**
 * DmFilterRuleEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmFilterRuleEntity {
    /** xsd:int */
    action?: string;
    /** attrList */
    attrList?: AttrList;
    /** xsd:int */
    id?: string;
    /** xsd:boolean */
    isActionChanged?: string;
    /** xsd:boolean */
    isAttrListChanged?: string;
    /** xsd:boolean */
    isRuleNameChanged?: string;
    /** xsd:string */
    ruleBucketTypeName?: string;
    /** xsd:string */
    ruleName?: string;
}
