import { DeviceEntities } from "./DeviceEntities";
import { StorageEntities } from "./StorageEntities";

/**
 * systemPropertyTopicDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface SystemPropertyTopicDto {
    /** deviceEntities */
    deviceEntities?: DeviceEntities;
    /** xsd:int */
    id?: string;
    /** storageEntities */
    storageEntities?: StorageEntities;
}
