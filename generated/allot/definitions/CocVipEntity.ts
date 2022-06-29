import { CocEntity } from "./CocEntity";

/**
 * CocVipEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.coc.catalog.nms.allot.com`
 */
export interface CocVipEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** cocEntity */
    cocEntity?: CocEntity;
    /** xsd:int */
    cocId?: string;
    /** xsd:string */
    ip?: string;
}
