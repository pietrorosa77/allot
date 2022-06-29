import { DeviceEventCounter } from "./DeviceEventCounter";

/**
 * WuDeviceInfoDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.webupdates.nms.allot.com`
 */
export interface WuDeviceInfoDto {
    /** xsd:string */
    baseCounter?: string;
    /** xsd:int */
    currentCounter?: string;
    /** xsd:int */
    currentPatch?: string;
    /** deviceCounters */
    deviceCounters?: DeviceEventCounter;
    /** xsd:int */
    deviceId?: string;
    /** xsd:string */
    installFilePath?: string;
    /** xsd:int */
    installPackCounter?: string;
    /** xsd:int */
    lastPatch?: string;
    /** xsd:int */
    majorVersion?: string;
    /** xsd:int */
    maxCounter?: string;
    /** xsd:int */
    version?: string;
    /** xsd:boolean */
    wuKeySupported?: string;
}
