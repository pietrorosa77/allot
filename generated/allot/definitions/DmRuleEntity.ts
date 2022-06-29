import { DmFilterAttrEntities } from "./DmFilterAttrEntities";
import { HdrInputEntity } from "./HdrInputEntity";

/**
 * DmRuleEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmRuleEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    actionLabel?: string;
    /** dmFilterAttrEntities */
    dmFilterAttrEntities?: DmFilterAttrEntities;
    /** dmInputBucketEntity */
    dmInputBucketEntity?: HdrInputEntity;
}
