import { CocEntity } from "./CocEntity";
import { VirtualServiceEntity } from "./VirtualServiceEntity";

/**
 * L4PortEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.coc.catalog.nms.allot.com`
 */
export interface L4PortEntity {
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
    direction?: string;
    /** xsd:int */
    steeringMode?: string;
    /** xsd:int */
    tcpPort?: string;
    /** xsd:int */
    type?: string;
    /** virtualServiceEntity */
    virtualServiceEntity?: VirtualServiceEntity;
    /** xsd:int */
    vsId?: string;
}
