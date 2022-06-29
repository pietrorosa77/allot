import { HostGroupMembers } from "./HostGroupMembers";
import { HostItemList } from "./HostItemList";

/**
 * hostEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.host.catalog.nms.allot.com`
 */
export interface HostEntity {
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
    /** xsd:int */
    dataSourceType?: string;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    deviceId?: string;
    /** xsd:boolean */
    externalSource?: string;
    /** xsd:string */
    filePath?: string;
    /** hostGroupMembers */
    hostGroupMembers?: HostGroupMembers;
    /** hostItems */
    hostItems?: HostItemList;
    /** xsd:int */
    localId?: string;
    /** xsd:int */
    suppressDistributed?: string;
    /** xsd:int */
    type?: string;
}
