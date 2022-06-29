import { VlanMembers } from "./VlanMembers";

/**
 * VlanEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.vlan.catalog.nms.allot.com`
 */
export interface VlanEntity {
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
    tag?: string;
    /** xsd:int */
    tagLast?: string;
    /** xsd:int */
    type?: string;
    /** vlanMembers */
    vlanMembers?: VlanMembers;
    /** xsd:int */
    vlanStackType?: string;
}
