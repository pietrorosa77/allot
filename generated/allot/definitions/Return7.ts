import { RoutingMaps } from "./RoutingMaps";
import { SmpAttributeMap } from "./SmpAttributeMap";
import { SmpRadiusTargets } from "./SmpRadiusTargets";
import { SmpSessionUpdatesAttributeMap } from "./SmpSessionUpdatesAttributeMap";

/**
 * return
 * @targetNSAlias `ns0`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface Return7 {
    /** xsd:int */
    blockNewSubscribers?: string;
    /** xsd:boolean */
    blockNewSubscribersChanged?: string;
    /** xsd:int */
    defaultCaptivePortal?: string;
    /** xsd:boolean */
    defaultCaptivePortalChanged?: string;
    /** xsd:int */
    defaultDomain?: string;
    /** xsd:boolean */
    defaultDomainChanged?: string;
    /** xsd:int */
    defaultServicePlan?: string;
    /** xsd:boolean */
    defaultServicePlanChanged?: string;
    /** xsd:int */
    domainType?: string;
    /** xsd:boolean */
    domainTypeChanged?: string;
    /** xsd:base64Binary */
    excludeIps?: string;
    /** xsd:boolean */
    excludeIpsChanged?: string;
    /** xsd:int */
    excludeIpsStatus?: string;
    /** xsd:base64Binary */
    excludeUsers?: string;
    /** xsd:boolean */
    excludeUsersChanged?: string;
    /** xsd:int */
    excludeUsersStatus?: string;
    /** xsd:base64Binary */
    groupSpMapping?: string;
    /** xsd:boolean */
    groupSpMappingChanged?: string;
    /** xsd:int */
    groupSpMappingStatus?: string;
    /** xsd:int */
    ipLeaseTime?: string;
    /** xsd:boolean */
    ipLeaseTimeChanged?: string;
    /** xsd:int */
    ipTimeoutFeature?: string;
    /** xsd:boolean */
    ipTimeoutFeatureChanged?: string;
    /** xsd:int */
    maxNumberSMPSubscr?: string;
    /** xsd:boolean */
    maxNumberSMPSubscrChanged?: string;
    /** xsd:int */
    maxSubInactivityTime?: string;
    /** xsd:boolean */
    maxSubInactivityTimeChanged?: string;
    /** xsd:int */
    oneTimeRedirectEnable?: string;
    /** xsd:boolean */
    oneTimeRedirectEnableChanged?: string;
    /** xsd:int */
    pccCdrDiscardZeroRecords?: string;
    /** xsd:boolean */
    pccCdrDiscardZeroRecordsChanged?: string;
    /** xsd:int */
    pccCdrFileFormat?: string;
    /** xsd:boolean */
    pccCdrFileFormatChanged?: string;
    /** xsd:int */
    pccCdrFileLifetime?: string;
    /** xsd:boolean */
    pccCdrFileLifetimeChanged?: string;
    /** xsd:string */
    pccCdrFilesPath?: string;
    /** xsd:string */
    pccCdrFilesPathAlternative?: string;
    /** xsd:boolean */
    pccCdrFilesPathAlternativeChanged?: string;
    /** xsd:boolean */
    pccCdrFilesPathChanged?: string;
    /** xsd:int */
    pccCdrTimeInterval?: string;
    /** xsd:boolean */
    pccCdrTimeIntervalChanged?: string;
    /** xsd:int */
    pccCdrVolumeClosingRecord?: string;
    /** xsd:boolean */
    pccCdrVolumeClosingRecordChanged?: string;
    /** xsd:int */
    pccCdrVolumeThreshold?: string;
    /** xsd:boolean */
    pccCdrVolumeThresholdChanged?: string;
    /** xsd:int */
    pccDynamicRule?: string;
    /** xsd:boolean */
    pccDynamicRuleChanged?: string;
    /** xsd:int */
    pccOfflineChargingManager?: string;
    /** xsd:boolean */
    pccOfflineChargingManagerChanged?: string;
    /** xsd:int */
    pccOnlineChargingManager?: string;
    /** xsd:boolean */
    pccOnlineChargingManagerChanged?: string;
    /** xsd:int */
    pccPolicyBase?: string;
    /** xsd:boolean */
    pccPolicyBaseChanged?: string;
    /** xsd:int */
    pccPolicySource?: string;
    /** xsd:boolean */
    pccPolicySourceChanged?: string;
    /** xsd:int */
    pccSdrCollectionStatus?: string;
    /** xsd:boolean */
    pccSdrCollectionStatusChanged?: string;
    /** xsd:int */
    plmn?: string;
    /** xsd:boolean */
    plmnChanged?: string;
    /** xsd:int */
    rai?: string;
    /** xsd:boolean */
    raiChanged?: string;
    /** xsd:int */
    ratType?: string;
    /** xsd:boolean */
    ratTypeChanged?: string;
    /** routingMaps */
    routingMaps?: RoutingMaps;
    /** xsd:int */
    sendTrapOnTimeout?: string;
    /** xsd:boolean */
    sendTrapOnTimeoutChanged?: string;
    /** xsd:boolean */
    servicePlanMapped?: string;
    /** xsd:int */
    sessionsPerSubscr?: string;
    /** xsd:boolean */
    sessionsPerSubscrChanged?: string;
    /** smpAttributeMap */
    smpAttributeMap?: SmpAttributeMap;
    /** smpRadiusTargets */
    smpRadiusTargets?: SmpRadiusTargets;
    /** xsd:boolean */
    smpRadiusTargetsChanged?: string;
    /** smpSessionUpdatesAttributeMap */
    smpSessionUpdatesAttributeMap?: SmpSessionUpdatesAttributeMap;
    /** xsd:int */
    tai?: string;
    /** xsd:boolean */
    taiChanged?: string;
    /** xsd:int */
    userLocation?: string;
    /** xsd:boolean */
    userLocationChanged?: string;
    /** xsd:int */
    workingEnvironment?: string;
    /** xsd:boolean */
    workingEnvironmentChanged?: string;
}
