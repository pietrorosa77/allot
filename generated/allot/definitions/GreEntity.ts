import { GreMembers } from "./GreMembers";

/**
 * GreEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.gre.catalog.nms.allot.com`
 */
export interface GreEntity {
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
    destinationIP?: string;
    /** greMembers */
    greMembers?: GreMembers;
    /** xsd:int */
    localId?: string;
    /** xsd:int */
    sourceIP?: string;
    /** xsd:int */
    tos?: string;
    /** xsd:int */
    type?: string;
}
