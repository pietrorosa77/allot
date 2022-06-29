import { VirtualServiceEntity } from "./VirtualServiceEntity";

/**
 * VSMemberEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.coc.catalog.nms.allot.com`
 */
export interface VsMemberEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    cocId?: string;
    /** virtualServiceEntity */
    virtualServiceEntity?: VirtualServiceEntity;
    /** xsd:int */
    vsId?: string;
}
