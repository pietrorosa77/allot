import { DmProfileEntities } from "./DmProfileEntities";
import { DmProfileEntity } from "./DmProfileEntity";

/**
 * CollectorEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.management.collectors.nms.allot.com`
 */
export interface CollectorEntity {
    /** xsd:int */
    admin?: string;
    /** xsd:int */
    backupCollectorId?: string;
    /** xsd:string */
    bucketTypesForCollection?: string;
    /** xsd:int */
    collectMode?: string;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    deviceId?: string;
    /** dmProfileEntities */
    dmProfileEntities?: DmProfileEntities;
    /** dmProfileEntity */
    dmProfileEntity?: DmProfileEntity;
    /** xsd:int */
    haMode?: string;
    /** xsd:int */
    id?: string;
    /** xsd:int */
    ltCollectorId?: string;
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
