import { BucketTypeEntities } from "./BucketTypeEntities";

/**
 * dmProfileEntity
 * @targetNSAlias `ns0`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmProfileEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** bucketTypeEntities */
    bucketTypeEntities?: BucketTypeEntities;
    /** xsd:string */
    defaultEscapeChar?: string;
    /** xsd:string */
    description?: string;
    /** xsd:string */
    escapeChar?: string;
}
