import { Action1 } from "./Action1";
import { Filters } from "./Filters";
import { RuleToFilters } from "./RuleToFilters";
import { RuleDefinition } from "./RuleDefinition";

/**
 * VcRuleDefinitionDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.serviceplan.sms.nms.allot.com`
 */
export interface VcRuleDefinitionDto {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** action */
    action?: Action1;
    /** xsd:int */
    actionId?: string;
    /** filters */
    filters?: Filters;
    /** xsd:int */
    quotaPlanId?: string;
    /** ruleToFilters */
    ruleToFilters?: RuleToFilters;
    /** xsd:int */
    cost?: string;
    /** parentRuleDefinition */
    parentRuleDefinition?: RuleDefinition;
    /** xsd:int */
    parentRuleDefinitionId?: string;
    /** xsd:int */
    seqNumber?: string;
    /** xsd:int */
    subscriberQuota?: string;
}
