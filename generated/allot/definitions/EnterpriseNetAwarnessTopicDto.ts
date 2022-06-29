import { CdcDeviceDtOs } from "./CdcDeviceDtOs";
import { CmtsRules } from "./CmtsRules";
import { InboundPacketDropClearnaceThreashold } from "./InboundPacketDropClearnaceThreashold";
import { NetAwarnessRules } from "./NetAwarnessRules";

/**
 * enterpriseNetAwarnessTopicDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface EnterpriseNetAwarnessTopicDto {
    /** xsd:boolean */
    autolearn?: string;
    /** xsd:boolean */
    autolearnChanged?: string;
    /** xsd:int */
    bitsNumber?: string;
    /** xsd:int */
    bwDynamicInboundLowerLimit?: string;
    /** xsd:boolean */
    bwDynamicInboundLowerLimitChanged?: string;
    /** xsd:int */
    bwDynamicOutboundLowerLimit?: string;
    /** xsd:boolean */
    bwDynamicOutboundLowerLimitChanged?: string;
    /** SensitivityMethodEnum|xsd:string|PERCENTAGE,ABSOLUTE */
    bwDynamicSensitivityMethod?: string;
    /** xsd:boolean */
    bwDynamicSensitivityMethodChanged?: string;
    /** xsd:int */
    bwUpdateChangeAbsolute?: string;
    /** xsd:boolean */
    bwUpdateChangeAbsoluteChanged?: string;
    /** xsd:float */
    bwUpdateChangePercentage?: string;
    /** xsd:boolean */
    bwUpdateChangePercentageChanged?: string;
    /** xsd:int */
    bwUpdatesMinimumInterval?: string;
    /** xsd:boolean */
    bwUpdatesMinimumIntervalChanged?: string;
    /** cdcDeviceDTOs */
    cdcDeviceDTOs?: CdcDeviceDtOs;
    /** xsd:boolean */
    cdcDeviceDtosChanged?: string;
    /** xsd:base64Binary */
    cellInfoFile?: string;
    /** xsd:boolean */
    cellInfoFileChanged?: string;
    /** xsd:int */
    cmtsChannelUpdateInterval?: string;
    /** xsd:boolean */
    cmtsChannelUpdateIntervalChanged?: string;
    /** xsd:int */
    cmtsClearanceThreshold?: string;
    /** xsd:boolean */
    cmtsClearanceThresholdChanged?: string;
    /** xsd:int */
    cmtsCongestionThreshold?: string;
    /** xsd:boolean */
    cmtsCongestionThresholdChanged?: string;
    /** xsd:int */
    cmtsDefaultEnforcementAction?: string;
    /** xsd:boolean */
    cmtsDefaultEnforcementActionChanged?: string;
    /** xsd:base64Binary */
    cmtsInfoFile?: string;
    /** xsd:boolean */
    cmtsInfoFileChanged?: string;
    /** xsd:int */
    cmtsInterfaceClearanceInterval?: string;
    /** xsd:boolean */
    cmtsInterfaceClearanceIntervalChanged?: string;
    /** xsd:int */
    cmtsInterfaceUpdateInterval?: string;
    /** xsd:boolean */
    cmtsInterfaceUpdateIntervalChanged?: string;
    /** cmtsRules */
    cmtsRules?: CmtsRules;
    /** xsd:boolean */
    cmtsRulesChanged?: string;
    /** xsd:int */
    congestionOffTimeSpan?: string;
    /** xsd:boolean */
    congestionOffTimeSpanChanged?: string;
    /** xsd:int */
    congestionOnTimeSpan?: string;
    /** xsd:boolean */
    congestionOnTimeSpanChanged?: string;
    /** xsd:boolean */
    dynamicBWupdateModeDistributed?: string;
    /** xsd:boolean */
    dynamicBWupdateModeDistributedChanged?: string;
    /** xsd:int */
    dynamicBandwidthInboundEnable?: string;
    /** xsd:boolean */
    dynamicBandwidthInboundEnableChanged?: string;
    /** xsd:int */
    dynamicBandwidthOutboundEnable?: string;
    /** xsd:boolean */
    dynamicBandwidthOutboundEnableChanged?: string;
    /** xsd:int */
    endBaselineTimeInterval?: string;
    /** xsd:boolean */
    endBaselineTimeIntervalChanged?: string;
    /** xsd:float */
    inboundPacketDropBaseline?: string;
    /** xsd:boolean */
    inboundPacketDropBaselineChanged?: string;
    /** inboundPacketDropClearnaceThreashold */
    inboundPacketDropClearnaceThreashold?: InboundPacketDropClearnaceThreashold;
    /** xsd:boolean */
    inboundPacketDropClearnaceThreasholdChanged?: string;
    /** inboundPacketDropCongestionThreashold */
    inboundPacketDropCongestionThreashold?: InboundPacketDropClearnaceThreashold;
    /** xsd:boolean */
    inboundPacketDropCongestionThreasholdChanged?: string;
    /** xsd:int */
    internalRttBaseline?: string;
    /** xsd:boolean */
    internalRttBaselineChanged?: string;
    /** internalRttClearnaceThreashold */
    internalRttClearnaceThreashold?: InboundPacketDropClearnaceThreashold;
    /** xsd:boolean */
    internalRttClearnaceThreasholdChanged?: string;
    /** internalRttCongestionThreashold */
    internalRttCongestionThreashold?: InboundPacketDropClearnaceThreashold;
    /** xsd:boolean */
    internalRttCongestionThreasholdChanged?: string;
    /** xsd:int */
    ipdrFetchMode?: string;
    /** xsd:int */
    monitoringInterval?: string;
    /** xsd:boolean */
    monitoringIntervalChanged?: string;
    /** xsd:int */
    monitoringResolution?: string;
    /** xsd:boolean */
    monitoringResolutionChanged?: string;
    /** xsd:int */
    netAwarenessWorkingMode?: string;
    /** xsd:boolean */
    netAwarenessWorkingModeChanged?: string;
    /** netAwarnessRules */
    netAwarnessRules?: NetAwarnessRules;
    /** xsd:boolean */
    netAwarnessRulesChanged?: string;
    /** xsd:base64Binary */
    networkInterfaceFile?: string;
    /** xsd:boolean */
    networkInterfaceFileChanged?: string;
    /** xsd:long */
    networkInterfaceFileLastChange?: string;
    /** xsd:float */
    outboundPacketDropBaseline?: string;
    /** xsd:boolean */
    outboundPacketDropBaselineChanged?: string;
    /** outboundPacketDropClearnaceThreashold */
    outboundPacketDropClearnaceThreashold?: InboundPacketDropClearnaceThreashold;
    /** xsd:boolean */
    outboundPacketDropClearnaceThreasholdChanged?: string;
    /** outboundPacketDropCongestionThreashold */
    outboundPacketDropCongestionThreashold?: InboundPacketDropClearnaceThreashold;
    /** xsd:boolean */
    outboundPacketDropCongestionThreasholdChanged?: string;
    /** xsd:int */
    sensitivityLevel?: string;
    /** xsd:boolean */
    sensitivityLevelChanged?: string;
    /** xsd:int */
    startBaselineTimeInterval?: string;
    /** xsd:boolean */
    startBaselineTimeIntervalChanged?: string;
}
