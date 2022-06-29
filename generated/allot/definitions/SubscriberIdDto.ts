import { SubscriberInstance } from "./SubscriberInstance";

/**
 * SubscriberIdDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.subscriber.sms.nms.allot.com`
 */
export interface SubscriberIdDto {
    /** xsd:int */
    admin?: string;
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    currentPlanId?: string;
    /** xsd:int */
    id?: string;
    /** xsd:int */
    idType?: string;
    /** xsd:string */
    idValue?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:int */
    routingMapId?: string;
    /** xsd:int */
    sourceRedundId?: string;
    /** xsd:int */
    subscriberId?: string;
    /** subscriberInstance */
    subscriberInstance?: SubscriberInstance;
}
