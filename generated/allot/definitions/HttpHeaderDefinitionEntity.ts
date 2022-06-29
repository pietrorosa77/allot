import { HttpHeaderEnrichmentEntity } from "./HttpHeaderEnrichmentEntity";

/**
 * HttpHeaderDefinitionEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.httpHeaderEnrichment.catalog.nms.allot.com`
 */
export interface HttpHeaderDefinitionEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    encoding?: string;
    /** xsd:string */
    encodingKey?: string;
    /** httpHeaderEnrichmentEntity */
    httpHeaderEnrichmentEntity?: HttpHeaderEnrichmentEntity;
    /** xsd:string */
    value?: string;
}
