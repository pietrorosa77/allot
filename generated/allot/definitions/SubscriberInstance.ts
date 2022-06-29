import { Arg01 } from "./Arg01";

/**
 * SubscriberInstance
 * @targetNSAlias `tns`
 * @targetNamespace `http://common.monitor.nms.allot.com`
 */
export interface SubscriberInstance {
    /** xsd:integer */
    key1?: string;
    /** redundantAllotId */
    redundantAllotId?: Arg01;
    /** xsd:int */
    sessionId?: string;
    /** xsd:long */
    sessionKey?: string;
    /** xsd:long */
    subscriberId?: string;
    /** SubscriberInstanceType|xsd:string|UNDEFINED,MSISDN,MAC,MSID,NAME,ALLOTID,IMSI */
    subscriberType?: string;
}
