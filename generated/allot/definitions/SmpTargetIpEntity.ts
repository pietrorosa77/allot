import { SmpRadiusTargetEntity } from "./SmpRadiusTargetEntity";

/**
 * SmpTargetIpEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.attribute.configuration.nms.allot.com`
 */
export interface SmpTargetIpEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    netAddress?: string;
    /** radiusTargetEntity */
    radiusTargetEntity?: SmpRadiusTargetEntity;
}
