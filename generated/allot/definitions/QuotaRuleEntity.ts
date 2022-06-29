
/**
 * QuotaRuleEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.quota.sms.nms.allot.com`
 */
export interface QuotaRuleEntity {
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
    /** xsd:int */
    actionServicePlanId?: string;
    /** xsd:int */
    chargingAppId?: string;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    quotaId?: string;
}
