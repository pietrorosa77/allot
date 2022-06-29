import { CocEntity } from "./CocEntity";

/**
 * CocServerEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.coc.catalog.nms.allot.com`
 */
export interface CocServerEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    admin?: string;
    /** xsd:decimal */
    bwCapacity?: string;
    /** xsd:int */
    chassisId?: string;
    /** cocEntity */
    cocEntity?: CocEntity;
    /** xsd:int */
    cocId?: string;
    /** xsd:decimal */
    concurrentConnLimit?: string;
    /** xsd:decimal */
    connPerSecLimit?: string;
    /** xsd:int */
    deploymentType?: string;
    /** xsd:int */
    extLineId?: string;
    /** xsd:int */
    hostId?: string;
    /** xsd:int */
    hostType?: string;
    /** xsd:int */
    intLineId?: string;
    /** xsd:boolean */
    isAutoConnectivityEnablementTraffic?: string;
    /** xsd:int */
    loadBalancingWeight?: string;
    /** xsd:int */
    localId?: string;
    /** xsd:string */
    mac1?: string;
    /** xsd:string */
    mac2?: string;
    /** xsd:string */
    managementIp?: string;
    /** xsd:int */
    mirrPorts?: string;
    /** xsd:string */
    monitoringIp?: string;
    /** xsd:string */
    monitoringIpExternal?: string;
    /** xsd:string */
    netAddress?: string;
    /** xsd:int */
    operation?: string;
    /** xsd:decimal */
    packetsPerSecLimit?: string;
    /** xsd:int */
    port?: string;
    /** xsd:int */
    portalIpv4?: string;
    /** xsd:string */
    portalIpv6?: string;
    /** xsd:string */
    portalRedirectProtocol?: string;
    /** xsd:int */
    sampleInterval?: string;
    /** xsd:string */
    serverIpv6External?: string;
    /** xsd:string */
    serverIpv6Internal?: string;
    /** xsd:int */
    serverStatus?: string;
    /** xsd:int */
    sfcAltExternalPort?: string;
    /** xsd:int */
    sfcAltIdExternalPort?: string;
    /** xsd:int */
    sfcAltIdInternalPort?: string;
    /** xsd:int */
    sfcAltInternalPort?: string;
    /** xsd:int */
    sfcExternalPort?: string;
    /** xsd:int */
    sfcInternalPort?: string;
    /** xsd:int */
    slotNumber?: string;
    /** xsd:int */
    trackTimeout?: string;
    /** xsd:int */
    vlanTag?: string;
    /** xsd:int */
    vlanTagExternal?: string;
    /** xsd:int */
    vlanTagInternal?: string;
    /** xsd:int */
    vlanTagIpv6External?: string;
    /** xsd:int */
    vlanTagIpv6Internal?: string;
    /** xsd:int */
    weight?: string;
}
