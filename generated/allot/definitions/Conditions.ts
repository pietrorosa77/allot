import { ConditionEntity } from "./ConditionEntity";

/**
 * conditions
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.chargingpolicy.policy.nms.allot.com`
 */
export interface Conditions {
    /** CPRuleConditionEntity[] */
    CPRuleConditionEntity?: Array<ConditionEntity>;
}
