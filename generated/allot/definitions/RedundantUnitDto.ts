import { CmtsEntities } from "./CmtsEntities";
import { UnitToDevices } from "./UnitToDevices";

/**
 * RedundantUnitDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.redundant.configuration.nms.allot.com`
 */
export interface RedundantUnitDto {
    /** xsd:int */
    accessRight?: string;
    /** xsd:int */
    administrator?: string;
    /** cmtsEntities */
    cmtsEntities?: CmtsEntities;
    /** xsd:boolean */
    cmtsEntitiesChanged?: string;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    deviceUnitId?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:int */
    maxMobileReportsIPSessions?: string;
    /** xsd:int */
    maxMobileReportsSubscribers?: string;
    /** xsd:int */
    maxOfflineChargingIPSessions?: string;
    /** xsd:int */
    maxOfflineChargingSubscribers?: string;
    /** xsd:int */
    maxOnlineChargingIPSessions?: string;
    /** xsd:int */
    maxOnlineChargingSubscribers?: string;
    /** xsd:int */
    maxQuotaManagementIPSessions?: string;
    /** xsd:int */
    maxQuotaManagementSubscribes?: string;
    /** xsd:int */
    maxSmfSubscribers?: string;
    /** xsd:int */
    maxTieredServicesGxIPSessions?: string;
    /** xsd:int */
    maxTieredServicesGxSubscribes?: string;
    /** xsd:int */
    maxTieredServicesIPSessions?: string;
    /** xsd:int */
    maxTieredServicesSubscribes?: string;
    /** xsd:int */
    maxVolumeReportingIPSessions?: string;
    /** xsd:int */
    maxVolumeReportingSubscribes?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    smfId?: string;
    /** xsd:int */
    type?: string;
    /** unitToDevices */
    unitToDevices?: UnitToDevices;
    /** xsd:string */
    vipNetAddr?: string;
}
