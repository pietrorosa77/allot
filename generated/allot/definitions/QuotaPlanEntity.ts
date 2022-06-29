import { GxUsages } from "./GxUsages";
import { QuotaRuleActions } from "./QuotaRuleActions";

/**
 * QuotaPlanEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.quota.sms.nms.allot.com`
 */
export interface QuotaPlanEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    accessRight?: string;
    /** xsd:string */
    description?: string;
    /** gxUsages */
    gxUsages?: GxUsages;
    /** quotaRuleActions */
    quotaRuleActions?: QuotaRuleActions;
}
