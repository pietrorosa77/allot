
/**
 * QuotaEventWSDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.quota.events.nms.allot.com`
 */
export interface QuotaEventWsdto {
    /** xsd:int */
    action?: string;
    /** xsd:int */
    allotId?: string;
    /** xsd:int */
    eventTypeId?: string;
    /** xsd:int */
    id?: string;
    /** xsd:string */
    ip?: string;
    /** xsd:string */
    msgText?: string;
    /** xsd:int */
    quotaType?: string;
    /** xsd:int */
    ruleId?: string;
    /** xsd:long */
    sessionKey?: string;
    /** xsd:long */
    subscriberID?: string;
    /** xsd:string */
    subscriberName?: string;
    /** xsd:long */
    timemark?: string;
}
