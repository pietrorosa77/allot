import { DeviceEventCounter } from "./DeviceEventCounter";

/**
 * arg0
 * @targetNSAlias `ns3`
 * @targetNamespace `http://dto.topology.nms.allot.com`
 */
export interface Arg0 {
    /** xsd:int */
    LTAllowed?: string;
    /** xsd:int */
    RTAllowed?: string;
    /** xsd:string */
    actKey?: string;
    /** xsd:int */
    administrator?: string;
    /** xsd:int */
    bypass?: string;
    /** xsd:int */
    collectionMode?: string;
    /** xsd:int */
    collectorId?: string;
    /** xsd:int */
    collectorUnitId?: string;
    /** xsd:int */
    devMode?: string;
    /** deviceEventCounter */
    deviceEventCounter?: DeviceEventCounter;
    /** xsd:int */
    deviceType?: string;
    /** xsd:int */
    deviceUnitId?: string;
    /** xsd:string */
    domainName?: string;
    /** xsd:int */
    gateway?: string;
    /** xsd:string */
    hostName?: string;
    /** xsd:int */
    id?: string;
    /** xsd:int */
    ipInterface?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:int */
    mdType?: string;
    /** xsd:int */
    modelType?: string;
    /** xsd:int */
    multiPolicyEnabled?: string;
    /** xsd:int */
    nativeCollectorId?: string;
    /** xsd:string */
    netAddress?: string;
    /** xsd:int */
    operational?: string;
    /** xsd:string */
    password?: string;
    /** xsd:int */
    redundancyMode?: string;
    /** xsd:string */
    resolveIP?: string;
    /** xsd:int */
    sgccNum?: string;
    /** xsd:string */
    softVersion?: string;
    /** xsd:boolean */
    ssl?: string;
    /** xsd:string */
    uiName?: string;
}
