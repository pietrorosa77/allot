import { TimeCatalogEntryEntity } from "./TimeCatalogEntryEntity";

/**
 * TimeDefinitionEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.time.catalog.nms.allot.com`
 */
export interface TimeDefinitionEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    fromHour?: string;
    /** xsd:int */
    fromMinute?: string;
    /** xsd:int */
    month?: string;
    /** xsd:int */
    monthDay?: string;
    /** timeCatalogEntryEntity */
    timeCatalogEntryEntity?: TimeCatalogEntryEntity;
    /** xsd:int */
    toHour?: string;
    /** xsd:int */
    toMinute?: string;
    /** xsd:int */
    type?: string;
    /** xsd:int */
    weekDay?: string;
    /** xsd:boolean */
    wholeDay?: string;
}
