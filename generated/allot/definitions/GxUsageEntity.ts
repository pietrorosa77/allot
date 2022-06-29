import { ChargingApplication } from "./ChargingApplication";
import { ServicePlanEntity } from "./ServicePlanEntity";

/**
 * GxUsageEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.serviceplan.sms.nms.allot.com`
 */
export interface GxUsageEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** chargingApplication */
    chargingApplication?: ChargingApplication;
    /** xsd:int */
    chargingApplicationId?: string;
    /** servicePlan */
    servicePlan?: ServicePlanEntity;
}
