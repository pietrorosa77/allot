import { CocGroupEntity } from "./CocGroupEntity";

/**
 * CocGroupMemberEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.coc.catalog.nms.allot.com`
 */
export interface CocGroupMemberEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** cocGroupEntity */
    cocGroupEntity?: CocGroupEntity;
    /** xsd:int */
    cocId?: string;
    /** xsd:int */
    groupId?: string;
    /** xsd:int */
    order?: string;
    /** xsd:int */
    vsId?: string;
}
