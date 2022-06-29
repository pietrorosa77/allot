import { QosEntity } from "./QosEntity";

/**
 * QosWireEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.qos.catalog.nms.allot.com`
 */
export interface QosWireEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:boolean */
    bandwidthType?: string;
    /** xsd:decimal */
    burst?: string;
    /** xsd:int */
    delay?: string;
    /** xsd:int */
    direction?: string;
    /** xsd:decimal */
    maximumBandwidth?: string;
    /** xsd:int */
    maximumBandwidthPercent?: string;
    /** xsd:decimal */
    minimumBandwidth?: string;
    /** xsd:boolean */
    minimumBandwidthReserved?: string;
    /** xsd:int */
    priority?: string;
    /** qosEntity */
    qosEntity?: QosEntity;
    /** xsd:decimal */
    vcMaximumBandwidth?: string;
    /** xsd:decimal */
    vcMinimumBandwidth?: string;
    /** xsd:int */
    vcTrafficShapingMethod?: string;
}
