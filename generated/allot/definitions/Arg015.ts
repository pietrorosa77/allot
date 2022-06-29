import { Return21 } from "./Return21";

/**
 * arg0
 * @targetNSAlias `ns0`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface Arg015 {
    /** xsd:boolean */
    enableNXReports?: string;
    /** xsd:boolean */
    enableNXReportsChanged?: string;
    /** xsd:int */
    multiPolicyEnableValue?: string;
    /** xsd:boolean */
    multiPolicyEnableValueChanged?: string;
    /** xsd:boolean */
    policyDistributionGroupChanged?: string;
    /** policyDistributionGroups */
    policyDistributionGroups?: Return21;
}
