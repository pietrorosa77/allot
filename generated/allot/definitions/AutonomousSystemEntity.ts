import { AutonomousSystemItems } from "./AutonomousSystemItems";

/**
 * AutonomousSystemEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.system.auto.catalog.nms.allot.com`
 */
export interface AutonomousSystemEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    accessRight?: string;
    /** xsd:int */
    admin?: string;
    /** autonomousSystemItems */
    autonomousSystemItems?: AutonomousSystemItems;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    localId?: string;
}
