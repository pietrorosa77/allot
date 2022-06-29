import { ChildRuleEntities } from "./ChildRuleEntities";
import { DmInputRecord } from "./DmInputRecord";
import { DmOutputBucketList } from "./DmOutputBucketList";
import { DmProfileEntities } from "./DmProfileEntities";

/**
 * enterpriseDMTopicDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface EnterpriseDmTopicDto {
    /** xsd:boolean */
    cli?: string;
    /** dmInputFilteringRuleList */
    dmInputFilteringRuleList?: ChildRuleEntities;
    /** xsd:boolean */
    dmInputFilteringRuleListChanged?: string;
    /** dmInputRecord */
    dmInputRecord?: DmInputRecord;
    /** xsd:boolean */
    dmInputRecordChanged?: string;
    /** dmOutputBucketList */
    dmOutputBucketList?: DmOutputBucketList;
    /** xsd:boolean */
    dmOutputBucketListChanged?: string;
    /** dmProfileList */
    dmProfileList?: DmProfileEntities;
    /** xsd:boolean */
    dmProfileListChanged?: string;
    /** xsd:int */
    dmTimeoutTrigger?: string;
    /** xsd:boolean */
    dmTimeoutTriggerChanged?: string;
}
