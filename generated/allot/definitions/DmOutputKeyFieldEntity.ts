import { DmOutputKeyEntity } from "./DmOutputKeyEntity";

/**
 * DmOutputKeyFieldEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmOutputKeyFieldEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** dmOutputKeyEntity */
    dmOutputKeyEntity?: DmOutputKeyEntity;
    /** xsd:string */
    field?: string;
}
