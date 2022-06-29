import { BucketTypesForCollection } from "./BucketTypesForCollection";
import { CsDevicePropDto } from "./CsDevicePropDto";
import { DmProfileEntities } from "./DmProfileEntities";
import { DmProfileEntity } from "./DmProfileEntity";

/**
 * CollectorDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.management.collectors.nms.allot.com`
 */
export interface CollectorDto {
    /** xsd:int */
    admin?: string;
    /** xsd:int */
    backup_collector_id?: string;
    /** bucketTypesForCollection */
    bucketTypesForCollection?: BucketTypesForCollection;
    /** xsd:string */
    bucketTypesForCollectionStr?: string;
    /** xsd:int */
    collectMode?: string;
    /** csDevicePropDto */
    csDevicePropDto?: CsDevicePropDto;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    device_id?: string;
    /** dmProfileEntities */
    dmProfileEntities?: DmProfileEntities;
    /** dmProfileEntity */
    dmProfileEntity?: DmProfileEntity;
    /** xsd:int */
    haMode?: string;
    /** xsd:int */
    id?: string;
    /** xsd:int */
    lt_collector_id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    oper?: string;
    /** xsd:string */
    profileName?: string;
    /** xsd:int */
    routingEn?: string;
    /** xsd:int */
    type?: string;
    /** xsd:int */
    widebandEnabled?: string;
}
