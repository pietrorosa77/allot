import { Arg012 } from "./Arg012";

/**
 * arg0
 * @targetNSAlias `ns0`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface Arg014 {
    /** allSources */
    allSources?: Arg012;
    /** xsd:boolean */
    isStatusChangeNotify?: string;
    /** xsd:int */
    operationalMode?: string;
    /** xsd:boolean */
    operationalModeChanged?: string;
    /** xsd:string */
    operatorDirectory?: string;
    /** xsd:boolean */
    operatorDirectoryChanged?: string;
    /** operatorSources */
    operatorSources?: Arg012;
    /** xsd:boolean */
    operatorSourcesChanged?: string;
    /** xsd:string */
    portalURL?: string;
    /** xsd:boolean */
    portalURLChanged?: string;
    /** xsd:boolean */
    statusChangeNotifyChanged?: string;
    /** xsd:int */
    updateServerBlacklistDownloads?: string;
    /** xsd:boolean */
    updateServerBlacklistDownloadsChanged?: string;
    /** xsd:int */
    updateServerTrackingRate?: string;
    /** xsd:boolean */
    updateServerTrackingRateChanged?: string;
    /** xsd:int */
    updateTimeout?: string;
    /** xsd:boolean */
    updateTimeoutChanged?: string;
    /** xsd:int */
    updateTimeoutEnable?: string;
    /** xsd:boolean */
    updateTimeoutEnableChanged?: string;
    /** xsd:int */
    urlAction?: string;
    /** xsd:boolean */
    urlActionChanged?: string;
    /** xsd:int */
    urlMonitoringOpMode?: string;
    /** xsd:boolean */
    urlMonitoringOpModeChanged?: string;
}
