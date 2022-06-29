import { ContentKeyEntity } from "./ContentKeyEntity";
import { Service2ContentValueEntities } from "./Service2ContentValueEntities";

/**
 * ContentValueEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.application.catalog.nms.allot.com`
 */
export interface ContentValueEntity {
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
    /** contentKeyEntity */
    contentKeyEntity?: ContentKeyEntity;
    /** service2ContentValueEntities */
    service2ContentValueEntities?: Service2ContentValueEntities;
    /** xsd:string */
    value?: string;
}
