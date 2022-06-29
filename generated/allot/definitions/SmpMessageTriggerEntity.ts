import { SmpRadiusTargetEntity } from "./SmpRadiusTargetEntity";

/**
 * SmpMessageTriggerEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.attribute.configuration.nms.allot.com`
 */
export interface SmpMessageTriggerEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:int */
    messageType?: string;
    /** radiusTargetEntity */
    radiusTargetEntity?: SmpRadiusTargetEntity;
}
