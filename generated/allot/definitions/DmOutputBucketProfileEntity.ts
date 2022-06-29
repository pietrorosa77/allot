import { DmOutputBucketEntity } from "./DmOutputBucketEntity";
import { DmOutputProfileEntity } from "./DmOutputProfileEntity";
import { PushEntity } from "./PushEntity";

/**
 * DmOutputBucketProfileEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmOutputBucketProfileEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** dmOutputBucketEntity */
    dmOutputBucketEntity?: DmOutputBucketEntity;
    /** dmOutputProfileEntity */
    dmOutputProfileEntity?: DmOutputProfileEntity;
    /** xsd:int */
    fileCloseTimeInterval?: string;
    /** DMCompressionType|xsd:string|NONE,GZIP,ZIP */
    fileCompress?: string;
    /** xsd:string */
    fileNameSchemaField?: string;
    /** xsd:int */
    fileSize?: string;
    /** xsd:string */
    folderName?: string;
    /** pushEntity */
    pushEntity?: PushEntity;
    /** xsd:int */
    retentionPeriod?: string;
}
