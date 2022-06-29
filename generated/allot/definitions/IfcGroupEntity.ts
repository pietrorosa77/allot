import { IfcGroupMembers } from "./IfcGroupMembers";

/**
 * IfcGroupEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.ifc.catalog.nms.allot.com`
 */
export interface IfcGroupEntity {
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
    /** ifcGroupMembers */
    ifcGroupMembers?: IfcGroupMembers;
    /** xsd:int */
    localId?: string;
}
