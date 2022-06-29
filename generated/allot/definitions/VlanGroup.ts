import { VlanMembers } from "./VlanMembers";

/**
 * vlanGroup
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.vlan.catalog.nms.allot.com`
 */
export interface VlanGroup {
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
    /** vlanMembers */
    vlanMembers?: VlanMembers;
}
