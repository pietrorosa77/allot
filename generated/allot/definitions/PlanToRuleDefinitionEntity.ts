import { RuleDefinition } from "./RuleDefinition";
import { ServicePlanEntity } from "./ServicePlanEntity";

/**
 * PlanToRuleDefinitionEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.serviceplan.sms.nms.allot.com`
 */
export interface PlanToRuleDefinitionEntity {
    /** xsd:int */
    cost?: string;
    /** xsd:int */
    id?: string;
    /** parentRuleDefinition */
    parentRuleDefinition?: RuleDefinition;
    /** xsd:int */
    quotaPlanId?: string;
    /** ruleDefinition */
    ruleDefinition?: RuleDefinition;
    /** xsd:int */
    sequenceNumber?: string;
    /** servicePlan */
    servicePlan?: ServicePlanEntity;
    /** xsd:int */
    subscriberQuota?: string;
}
