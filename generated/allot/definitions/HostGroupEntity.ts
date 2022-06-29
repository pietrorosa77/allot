import { HostGroupMembers } from "./HostGroupMembers";

/**
 * hostGroupEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.host.catalog.nms.allot.com`
 */
export interface HostGroupEntity {
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
    deviceId?: string;
    /** xsd:string */
    filePath?: string;
    /** hostGroupMembers */
    hostGroupMembers?: HostGroupMembers;
    /** xsd:int */
    instanceType?: string;
    /** xsd:int */
    localId?: string;
    /** xsd:int */
    suppressDistributed?: string;
    /** xsd:int */
    type?: string;
}
