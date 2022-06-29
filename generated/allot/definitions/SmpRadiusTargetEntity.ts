import { AvpFilters } from "./AvpFilters";
import { Message } from "./Message";
import { MessageTriggers } from "./MessageTriggers";
import { ServicePlanFilterIds } from "./ServicePlanFilterIds";
import { SourceIpFilters } from "./SourceIpFilters";
import { TargetIps } from "./TargetIps";

/**
 * SmpRadiusTargetEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.attribute.configuration.nms.allot.com`
 */
export interface SmpRadiusTargetEntity {
    /** avpFilters */
    avpFilters?: AvpFilters;
    /** xsd:boolean */
    avpFiltersChanged?: string;
    /** xsd:int */
    changeStatus?: string;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:int */
    loadBalancing?: string;
    /** message */
    message?: Message;
    /** xsd:boolean */
    messageChanged?: string;
    /** messageTriggers */
    messageTriggers?: MessageTriggers;
    /** xsd:boolean */
    messageTriggersChanged?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    secretKey?: string;
    /** servicePlanFilterIds */
    servicePlanFilterIds?: ServicePlanFilterIds;
    /** xsd:boolean */
    servicePlanFilterIdsChanged?: string;
    /** sourceIpFilters */
    sourceIpFilters?: SourceIpFilters;
    /** xsd:boolean */
    sourceIpFiltersChanged?: string;
    /** targetIps */
    targetIps?: TargetIps;
    /** xsd:boolean */
    targetIpsChanged?: string;
}
