
/**
 * FilterDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.policy.nms.allot.com`
 */
export interface FilterDto {
    /** xsd:int */
    admin?: string;
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    clientDevice?: string;
    /** xsd:int */
    clientDeviceGroup?: string;
    /** CongestionStateEnum|xsd:string|IGNORED,CONGESTED,CLEARED */
    congestionState?: string;
    /** xsd:int */
    destinationAS?: string;
    /** xsd:int */
    direction?: string;
    /** xsd:int */
    gre?: string;
    /** xsd:int */
    greGroup?: string;
    /** xsd:int */
    hostExternal?: string;
    /** xsd:int */
    hostGroupExternal?: string;
    /** xsd:int */
    hostGroupInternal?: string;
    /** xsd:int */
    hostInternal?: string;
    /** xsd:int */
    id?: string;
    /** xsd:int */
    ifIndex?: string;
    /** xsd:int */
    ifcGroup?: string;
    /** xsd:int */
    ifcPort?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:long */
    netUnitGroupId?: string;
    /** xsd:int */
    nextHopAS?: string;
    /** xsd:int */
    qoeRuleDef?: string;
    /** xsd:int */
    service?: string;
    /** xsd:int */
    serviceGroup?: string;
    /** xsd:int */
    sourceASPath?: string;
    /** xsd:int */
    tethering?: string;
    /** xsd:int */
    timeCatalog?: string;
    /** xsd:int */
    tos?: string;
    /** xsd:int */
    userSpecificService?: string;
    /** xsd:int */
    vlan?: string;
    /** xsd:int */
    vlanGroup?: string;
}
