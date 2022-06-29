import { QosEntity } from "./QosEntity";

/**
 * QosPcmmEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.qos.catalog.nms.allot.com`
 */
export interface QosPcmmEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    direction?: string;
    /** xsd:int */
    maxPacketSize?: string;
    /** xsd:int */
    minPolicedUnit?: string;
    /** xsd:double */
    peakDataRate?: string;
    /** qosEntity */
    qosEntity?: QosEntity;
    /** xsd:double */
    rate?: string;
    /** xsd:int */
    serviceNumber?: string;
    /** xsd:int */
    slackTerm?: string;
    /** xsd:double */
    tokenBucketRate?: string;
    /** xsd:double */
    tokenBucketSize?: string;
}
