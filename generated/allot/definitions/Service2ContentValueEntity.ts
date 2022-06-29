import { ContentValueEntity } from "./ContentValueEntity";
import { ServiceEntity } from "./ServiceEntity";

/**
 * Service2ContentValueEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.service.catalog.nms.allot.com`
 */
export interface Service2ContentValueEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** contentValueEntity */
    contentValueEntity?: ContentValueEntity;
    /** xsd:int */
    keyId?: string;
    /** xsd:int */
    keyLocalId?: string;
    /** serviceEntity */
    serviceEntity?: ServiceEntity;
    /** xsd:int */
    serviceId?: string;
    /** xsd:int */
    valueId?: string;
}
