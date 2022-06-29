import { SubscriberInstance } from "./SubscriberInstance";
import { Values1 } from "./Values1";

/**
 * QuotaEventDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.quota.events.nms.allot.com`
 */
export interface QuotaEventDto {
    /** xsd:int */
    action?: string;
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
    /** xsd:int */
    severity?: string;
    /** subscriberInstance */
    subscriberInstance?: SubscriberInstance;
    /** xsd:long */
    timemark?: string;
    /** values */
    values?: Values1;
}
