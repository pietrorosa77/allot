import { ChargingApplication } from "./ChargingApplication";
import { ChargingPlan } from "./ChargingPlan";

/**
 * ChargingPlan2ChargingApplicationEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.cp.charging.catalog.nms.allot.com`
 */
export interface ChargingPlan2ChargingApplicationEntity {
    /** xsd:int */
    changeStatus?: string;
    /** chargingApplication */
    chargingApplication?: ChargingApplication;
    /** xsd:int */
    chargingApplicationId?: string;
    /** chargingPlan */
    chargingPlan?: ChargingPlan;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:int */
    monitorStatus?: string;
    /** xsd:int */
    ratingGroup?: string;
    /** xsd:int */
    sessionExclusion?: string;
}
