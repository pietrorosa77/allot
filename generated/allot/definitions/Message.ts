import { SmpRadiusTargetEntity } from "./SmpRadiusTargetEntity";

/**
 * message
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.attribute.configuration.nms.allot.com`
 */
export interface Message {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:boolean */
    imsiFlag?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:boolean */
    msisdnFlag?: string;
    /** xsd:boolean */
    policyFlag?: string;
    /** radiusTargetEntity */
    radiusTargetEntity?: SmpRadiusTargetEntity;
    /** xsd:boolean */
    ratFlag?: string;
}
