
/**
 * NetUnitStatusDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.netawr.configuration.nms.allot.com`
 */
export interface NetUnitStatusDto {
    /** xsd:int */
    inboundBWLowerLimit?: string;
    /** NetUnitBandwidthType|xsd:string|STATIC,DYNAMIC,NA */
    inboundBWType?: string;
    /** xsd:int */
    inboundBWUpperLimit?: string;
    /** xsd:int */
    inboundMaxBW?: string;
    /** xsd:float */
    inboundPacketDropBaseline?: string;
    /** xsd:float */
    inboundPacketDropClearanceThresholds?: string;
    /** xsd:float */
    inboundPacketDropCongestionThresholds?: string;
    /** NetUnitStatus|xsd:string|CONGESTED,CLEARED,UNKNOWN */
    inboundStatus?: string;
    /** xsd:long */
    inboundStatusLastUpdate?: string;
    /** xsd:float */
    inboundWindowPacketDrop?: string;
    /** NetUnitWorkingMode|xsd:string|DETECTION_ONLY,DETECTION_AND_ENFORCEMENT */
    inboundWorkingMode?: string;
    /** xsd:int */
    internalRttBaseline?: string;
    /** xsd:int */
    internalRttClearanceThreshold?: string;
    /** xsd:int */
    internalRttCongestionThreshold?: string;
    /** xsd:int */
    internalWindowRtt?: string;
    /** xsd:string */
    netUnitGroupName?: string;
    /** xsd:int */
    netUnitId?: string;
    /** xsd:string */
    netUnitName?: string;
    /** xsd:int */
    outboundBWLowerLimit?: string;
    /** NetUnitBandwidthType|xsd:string|STATIC,DYNAMIC,NA */
    outboundBWType?: string;
    /** xsd:int */
    outboundBWUpperLimit?: string;
    /** xsd:int */
    outboundMaxBW?: string;
    /** xsd:float */
    outboundPacketDropBaseline?: string;
    /** xsd:float */
    outboundPacketDropClearanceThresholds?: string;
    /** xsd:float */
    outboundPacketDropCongestionThresholds?: string;
    /** NetUnitStatus|xsd:string|CONGESTED,CLEARED,UNKNOWN */
    outboundStatus?: string;
    /** xsd:long */
    outboundStatusLastUpdate?: string;
    /** xsd:float */
    outboundWindowPacketDrop?: string;
    /** NetUnitWorkingMode|xsd:string|DETECTION_ONLY,DETECTION_AND_ENFORCEMENT */
    outboundWorkingMode?: string;
}
