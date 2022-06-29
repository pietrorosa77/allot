
/**
 * CsRtFilterEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.clearsee.management.configuration.nms.allot.com`
 */
export interface CsRtFilterEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    clientIpAddress?: string;
    /** xsd:int */
    csId?: string;
    /** xsd:string */
    instanceKey1?: string;
    /** xsd:int */
    instanceType?: string;
    /** xsd:int */
    prefixLengthKey2?: string;
    /** xsd:int */
    ruleId?: string;
    /** CsRtFilterSubType|xsd:string|Subscriber,IPV4,IPV6 */
    ruleSubType?: string;
    /** CsRtFilterType|xsd:string|Instance,InternalHost */
    ruleType?: string;
}
