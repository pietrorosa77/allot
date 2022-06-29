import { TimeDefinitionEntity } from "./TimeDefinitionEntity";

/**
 * timeDefinitions
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.time.catalog.nms.allot.com`
 */
export interface TimeDefinitions {
    /** TimeDefinitionEntity[] */
    TimeDefinitionEntity?: Array<TimeDefinitionEntity>;
}
