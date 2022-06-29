import { ChargingApplication } from "./ChargingApplication";
import { QuotaPlanEntity } from "./QuotaPlanEntity";

/**
 * QuotaPlanUsageExcludeEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.quota.sms.nms.allot.com`
 */
export interface QuotaPlanUsageExcludeEntity {
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
    /** quotaPlan */
    quotaPlan?: QuotaPlanEntity;
}
