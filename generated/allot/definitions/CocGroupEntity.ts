import { CocGroupMembers } from "./CocGroupMembers";

/**
 * CocGroupEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.coc.catalog.nms.allot.com`
 */
export interface CocGroupEntity {
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
    /** cocGroupMembers */
    cocGroupMembers?: CocGroupMembers;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    deviceId?: string;
    /** xsd:int */
    localId?: string;
    /** xsd:int */
    type?: string;
}
