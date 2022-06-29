import { QosPcmms } from "./QosPcmms";
import { QosWires } from "./QosWires";

/**
 * QosEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.qos.catalog.nms.allot.com`
 */
export interface QosEntity {
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
    action?: string;
    /** xsd:int */
    admin?: string;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    destinationIP?: string;
    /** xsd:int */
    destinationPort?: string;
    /** xsd:int */
    dropPrecedence?: string;
    /** xsd:boolean */
    expeditedForwarding?: string;
    /** xsd:int */
    localId?: string;
    /** qosPcmms */
    qosPcmms?: QosPcmms;
    /** qosWires */
    qosWires?: QosWires;
    /** xsd:int */
    sourcePort?: string;
    /** xsd:int */
    type?: string;
}
