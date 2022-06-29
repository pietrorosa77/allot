import { MonitoredServiceGroupEntity } from "./MonitoredServiceGroupEntity";

/**
 * MonitoredServiceGroupMemberEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.monitoredServiceGroup.catalog.nms.allot.com`
 */
export interface MonitoredServiceGroupMemberEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** monitoredServiceGroupEntity */
    monitoredServiceGroupEntity?: MonitoredServiceGroupEntity;
    /** xsd:string */
    ppGroupName?: string;
    /** xsd:int */
    serviceId?: string;
    /** xsd:int */
    serviceLocalId?: string;
    /** xsd:string */
    serviceName?: string;
}
