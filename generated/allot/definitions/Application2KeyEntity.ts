import { ContentKeyEntity } from "./ContentKeyEntity";

/**
 * Application2KeyEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.application.catalog.nms.allot.com`
 */
export interface Application2KeyEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    applicationId?: string;
    /** contentKeyEntity */
    contentKeyEntity?: ContentKeyEntity;
}
