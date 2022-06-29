import { DmBucketTypeEntity } from "./DmBucketTypeEntity";

/**
 * DmChargingAppEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmChargingAppEntity {
    /** bucketTypeEntity */
    bucketTypeEntity?: DmBucketTypeEntity;
    /** xsd:int */
    chargingAppId?: string;
    /** xsd:int */
    id?: string;
}
