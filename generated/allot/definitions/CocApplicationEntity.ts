import { CocEntity } from "./CocEntity";
import { VirtualServiceEntity } from "./VirtualServiceEntity";

/**
 * CocApplicationEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.coc.catalog.nms.allot.com`
 */
export interface CocApplicationEntity {
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
    /** xsd:int */
    serviceId?: string;
    /** virtualServiceEntity */
    virtualServiceEntity?: VirtualServiceEntity;
    /** xsd:int */
    vsId?: string;
}
