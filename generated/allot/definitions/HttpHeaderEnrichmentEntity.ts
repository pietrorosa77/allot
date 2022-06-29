import { HttpHeaderDef } from "./HttpHeaderDef";

/**
 * HttpHeaderEnrichmentEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.httpHeaderEnrichment.catalog.nms.allot.com`
 */
export interface HttpHeaderEnrichmentEntity {
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
    /** httpHeaderDef */
    httpHeaderDef?: HttpHeaderDef;
    /** xsd:int */
    localId?: string;
}
