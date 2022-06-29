import { CocApplicationDtOs } from "./CocApplicationDtOs";
import { CocServers } from "./CocServers";
import { CocVips } from "./CocVips";
import { L4Ports } from "./L4Ports";

/**
 * cocEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.coc.catalog.nms.allot.com`
 */
export interface CocEntity {
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
    /** xsd:int */
    admin?: string;
    /** xsd:int */
    cloneEnabled?: string;
    /** cocApplicationDTOs */
    cocApplicationDTOs?: CocApplicationDtOs;
    /** cocServers */
    cocServers?: CocServers;
    /** cocVips */
    cocVips?: CocVips;
    /** xsd:int */
    connIdleTime?: string;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    deviceId?: string;
    /** xsd:int */
    executionOrder?: string;
    /** xsd:string */
    externalIp?: string;
    /** xsd:string */
    externalIpv6?: string;
    /** FallbackSteeringModeEnum|xsd:string|NONE,BIDIRECTIONAL,CLIENT2SERVER,SERVER2CLIENT,IGNORE */
    fallbackSteeringMode?: string;
    /** xsd:int */
    fixedPort?: string;
    /** xsd:int */
    flowDirection?: string;
    /** xsd:int */
    httpPort?: string;
    /** xsd:string */
    httpTrackingAgent?: string;
    /** xsd:string */
    httpTrackingHost?: string;
    /** xsd:int */
    ipv4Support?: string;
    /** xsd:int */
    ipv4TrackingStatus?: string;
    /** xsd:int */
    ipv6Support?: string;
    /** xsd:int */
    ipv6TrackingStatus?: string;
    /** xsd:int */
    isDynamicActivationEnabled?: string;
    /** L4ConnectionStateEnum|xsd:string|IGNORE,FIRST_PACKET,FIRST_SECOND_PACKET,ANY_PACKET */
    l4ConnectState?: string;
    /** l4Ports */
    l4Ports?: L4Ports;
    /** xsd:int */
    loadBalanceType?: string;
    /** xsd:int */
    localId?: string;
    /** xsd:string */
    localIp?: string;
    /** xsd:string */
    localIpv6?: string;
    /** xsd:int */
    minActiveServers?: string;
    /** xsd:string */
    networkPrefix?: string;
    /** xsd:int */
    networkPrefixLength?: string;
    /** xsd:int */
    numberOfRedundantServers?: string;
    /** xsd:int */
    operation?: string;
    /** xsd:int */
    overrideConnIdleTime?: string;
    /** xsd:int */
    portPolicy?: string;
    /** xsd:int */
    rateLimit?: string;
    /** xsd:int */
    serverUnavailableAction?: string;
    /** xsd:int */
    serverUnavailableActionForOpenConn?: string;
    /** xsd:int */
    serviceStatus?: string;
    /** xsd:int */
    serviceType?: string;
    /** xsd:int */
    serviceUnavailabilityAction?: string;
    /** xsd:int */
    trackingInterface?: string;
    /** xsd:int */
    trackingInterval?: string;
    /** xsd:int */
    trackingMethod?: string;
    /** xsd:int */
    trackingRetries?: string;
    /** xsd:int */
    type?: string;
    /** xsd:int */
    virtualServiceId?: string;
    /** xsd:int */
    vlanRemove?: string;
}
