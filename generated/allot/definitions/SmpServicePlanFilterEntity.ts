import { SmpRadiusTargetEntity } from "./SmpRadiusTargetEntity";

/**
 * SmpServicePlanFilterEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.attribute.configuration.nms.allot.com`
 */
export interface SmpServicePlanFilterEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** radiusTargetEntity */
    radiusTargetEntity?: SmpRadiusTargetEntity;
    /** xsd:int */
    servicePlanId?: string;
}
