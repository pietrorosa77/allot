import { DataMediationEntities } from "./DataMediationEntities";
import { OutputBucketProfileEntities } from "./OutputBucketProfileEntities";

/**
 * DmOutputProfileEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmOutputProfileEntity {
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
    /** dataMediationEntities */
    dataMediationEntities?: DataMediationEntities;
    /** xsd:string */
    defaultEscapeChar?: string;
    /** xsd:string */
    description?: string;
    /** xsd:string */
    escapeChar?: string;
    /** outputBucketProfileEntities */
    outputBucketProfileEntities?: OutputBucketProfileEntities;
    /** xsd:int */
    type?: string;
    /** xsd:string */
    version?: string;
}
