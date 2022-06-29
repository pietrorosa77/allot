import { DmProfileEntity } from "./DmProfileEntity";
import { Push } from "./Push";

/**
 * DmBucketTypeEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmBucketTypeEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    aggregationPeriod?: string;
    /** dmProfileEntity */
    dmProfileEntity?: DmProfileEntity;
    /** xsd:int */
    fileCloseTimeInterval?: string;
    /** xsd:int */
    fileCompress?: string;
    /** xsd:int */
    fileSizeLimit?: string;
    /** xsd:int */
    mediationType?: string;
    /** push */
    push?: Push;
    /** xsd:int */
    retentionPeriod?: string;
}
