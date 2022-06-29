import { Policies } from "./Policies";

/**
 * statusTopicDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface StatusTopicDto {
    /** xsd:boolean */
    AOS?: string;
    /** xsd:boolean */
    allowUpdate?: string;
    /** xsd:int */
    bypass?: string;
    /** xsd:boolean */
    bypassChanged?: string;
    /** xsd:int */
    bypassSetting?: string;
    /** xsd:boolean */
    bypassSettingChanged?: string;
    /** xsd:int */
    deviceMode?: string;
    /** xsd:boolean */
    deviceModeChanged?: string;
    /** xsd:int */
    fan?: string;
    /** xsd:boolean */
    fanChanged?: string;
    /** xsd:string */
    fansAosStatus?: string;
    /** xsd:boolean */
    fansAosStatusChanged?: string;
    /** policies */
    policies?: Policies;
    /** xsd:boolean */
    policyOrderingChanged?: string;
    /** xsd:int */
    power?: string;
    /** xsd:boolean */
    powerChanged?: string;
    /** xsd:string */
    powerSupplyAosStatus?: string;
    /** xsd:boolean */
    powerSupplyAosStatusChanged?: string;
    /** xsd:int */
    remoteBypass?: string;
    /** xsd:boolean */
    remoteBypassChanged?: string;
    /** xsd:int */
    secondaryPolicyEnable?: string;
    /** xsd:boolean */
    secondaryPolicyEnableChanged?: string;
}
