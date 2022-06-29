import { SmpRadiusTargetEntity } from "./SmpRadiusTargetEntity";

/**
 * SmpAvpFilterEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.attribute.configuration.nms.allot.com`
 */
export interface SmpAvpFilterEntity {
    /** xsd:int */
    avpType?: string;
    /** xsd:int */
    avpVendorId?: string;
    /** xsd:int */
    avpVendorSubtype?: string;
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** radiusTargetEntity */
    radiusTargetEntity?: SmpRadiusTargetEntity;
    /** xsd:string */
    value?: string;
}
