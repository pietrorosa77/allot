import { DmOutputFieldEntity } from "./DmOutputFieldEntity";

/**
 * DmOutputSourceFieldEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmOutputSourceFieldEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    field?: string;
    /** outputFieldEntity */
    outputFieldEntity?: DmOutputFieldEntity;
    /** xsd:int */
    sourceFieldIndex?: string;
}
