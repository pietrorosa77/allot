import { QuotaPlanEntity } from "./QuotaPlanEntity";

/**
 * QuotaRuleActionEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.quota.sms.nms.allot.com`
 */
export interface QuotaRuleActionEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    actionServicePlanId?: string;
    /** quotaPlan */
    quotaPlan?: QuotaPlanEntity;
    /** xsd:int */
    quotaRuleId?: string;
}
