
/**
 * ServicePlanAddOnEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.serviceplanaddon.catalog.nms.allot.com`
 */
export interface ServicePlanAddOnEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** ServicePlanAddOnAccessTypeEnum|xsd:string|ACCEPT,DROP */
    accessType?: string;
    /** xsd:int */
    acessRight?: string;
    /** xsd:int */
    admin?: string;
    /** xsd:int */
    chargingAppId?: string;
    /** ServicePlanAddOnChargingTypeEnum|xsd:string|NONE,OCS,OFCS,OCS_OFCS */
    chargingType?: string;
    /** xsd:int */
    cocId?: string;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    qosId?: string;
    /** xsd:int */
    ratingGroup?: string;
    /** xsd:int */
    tosId?: string;
}
