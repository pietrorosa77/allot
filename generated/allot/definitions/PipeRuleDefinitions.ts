import { PipeRuleDefinitionDto } from "./PipeRuleDefinitionDto";

/**
 * pipeRuleDefinitions
 * @targetNSAlias `ns1`
 * @targetNamespace `http://dto.serviceplan.sms.nms.allot.com`
 */
export interface PipeRuleDefinitions {
    /** PipeRuleDefinitionDTO[] */
    PipeRuleDefinitionDTO?: Array<PipeRuleDefinitionDto>;
}
