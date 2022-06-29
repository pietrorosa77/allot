import { Application2KeyEntities } from "./Application2KeyEntities";
import { ContentValueEntities } from "./ContentValueEntities";

/**
 * contentKeyEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.application.catalog.nms.allot.com`
 */
export interface ContentKeyEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** application2KeyEntities */
    application2KeyEntities?: Application2KeyEntities;
    /** contentValueEntities */
    contentValueEntities?: ContentValueEntities;
    /** xsd:int */
    deviceType?: string;
    /** xsd:int */
    localId?: string;
}
