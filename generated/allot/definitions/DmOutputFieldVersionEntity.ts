import { DmOutputFieldEntity } from "./DmOutputFieldEntity";

/**
 * DmOutputFieldVersionEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmOutputFieldVersionEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    fromSoftVersion?: string;
    /** outputField */
    outputField?: DmOutputFieldEntity;
    /** xsd:string */
    toSoftVersion?: string;
}
