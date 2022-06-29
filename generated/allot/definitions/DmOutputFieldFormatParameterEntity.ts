import { DmOutputFieldEntity } from "./DmOutputFieldEntity";

/**
 * DmOutputFieldFormatParameterEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmOutputFieldFormatParameterEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** outputFieldEntity */
    outputFieldEntity?: DmOutputFieldEntity;
    /** xsd:string */
    value?: string;
}
