import { ChargingPolicyRule } from "./ChargingPolicyRule";

/**
 * rules
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.chargingpolicy.policy.nms.allot.com`
 */
export interface Rules {
    /** ChargingPolicyRuleEntity[] */
    ChargingPolicyRuleEntity?: Array<ChargingPolicyRule>;
}
