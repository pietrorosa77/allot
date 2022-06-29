import { TimeDefinitions } from "./TimeDefinitions";

/**
 * TimeCatalogEntryEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.time.catalog.nms.allot.com`
 */
export interface TimeCatalogEntryEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    accessRight?: string;
    /** xsd:int */
    admin?: string;
    /** xsd:string */
    description?: string;
    /** timeDefinitions */
    timeDefinitions?: TimeDefinitions;
}
