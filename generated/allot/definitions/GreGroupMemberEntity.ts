import { GreEntity } from "./GreEntity";
import { GreGroup } from "./GreGroup";

/**
 * GreGroupMemberEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.gre.catalog.nms.allot.com`
 */
export interface GreGroupMemberEntity {
    /** xsd:int */
    changeStatus?: string;
    /** gre */
    gre?: GreEntity;
    /** greGroup */
    greGroup?: GreGroup;
    /** xsd:int */
    greId?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
}
