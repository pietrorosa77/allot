import { Action1 } from "./Action1";
import { Filters } from "./Filters";
import { RuleToFilters } from "./RuleToFilters";

/**
 * ruleDefinition
 * @targetNSAlias `ns0`
 * @targetNamespace `http://ejb.serviceplan.sms.nms.allot.com`
 */
export interface RuleDefinition {
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
}
