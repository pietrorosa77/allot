import { GreMembers } from "./GreMembers";

/**
 * greGroup
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.gre.catalog.nms.allot.com`
 */
export interface GreGroup {
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
    /** greMembers */
    greMembers?: GreMembers;
    /** xsd:int */
    localId?: string;
}
