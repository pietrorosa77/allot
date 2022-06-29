import { AutonomousSystemEntity } from "./AutonomousSystemEntity";

/**
 * AutonomousSystemItemEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.system.auto.catalog.nms.allot.com`
 */
export interface AutonomousSystemItemEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** autonomousSystemEntity */
    autonomousSystemEntity?: AutonomousSystemEntity;
    /** xsd:int */
    autonomousSystemNumber?: string;
    /** xsd:int */
    localId?: string;
}
