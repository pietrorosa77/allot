import { SmpRadiusTargetEntity } from "./SmpRadiusTargetEntity";

/**
 * SmpSourceIpFilterEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.attribute.configuration.nms.allot.com`
 */
export interface SmpSourceIpFilterEntity {
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
