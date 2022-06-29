import { Counter } from "./Counter";

/**
 * AlertEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.alert.catalog.nms.allot.com`
 */
export interface AlertEntity {
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
    /** xsd:int */
    alertCounter?: string;
    /** xsd:int */
    alertType?: string;
    /** counter */
    counter?: Counter;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    isAlarm?: string;
    /** xsd:int */
    modeFlag?: string;
    /** xsd:int */
    normal?: string;
    /** xsd:int */
    register?: string;
    /** xsd:int */
    relation?: string;
    /** xsd:int */
    severity?: string;
    /** xsd:int */
    threshold?: string;
    /** xsd:int */
    unregister?: string;
}
