import { MonitoredServiceGroupMembers } from "./MonitoredServiceGroupMembers";

/**
 * MonitoredServiceGroupEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.monitoredServiceGroup.catalog.nms.allot.com`
 */
export interface MonitoredServiceGroupEntity {
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
    admin?: string;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    localId?: string;
    /** monitoredServiceGroupMembers */
    monitoredServiceGroupMembers?: MonitoredServiceGroupMembers;
}
