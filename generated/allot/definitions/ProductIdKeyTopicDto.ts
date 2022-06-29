import { License } from "./License";
import { LicenseInfo } from "./LicenseInfo";
import { SystemLimitsTopicDto } from "./SystemLimitsTopicDto";
import { WuCounter } from "./WuCounter";

/**
 * productIDKeyTopicDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface ProductIdKeyTopicDto {
    /** xsd:string */
    activationKey?: string;
    /** xsd:boolean */
    activationKeyChanged?: string;
    /** xsd:string */
    activationSerial?: string;
    /** xsd:string */
    backplaneVersion?: string;
    /** xsd:boolean */
    backplaneVersionChanged?: string;
    /** xsd:string */
    boxNumber?: string;
    /** xsd:boolean */
    boxNumberChanged?: string;
    /** xsd:int */
    bwLimitsIn?: string;
    /** xsd:boolean */
    bwLimitsInChanged?: string;
    /** xsd:int */
    bwLimitsOut?: string;
    /** xsd:boolean */
    bwLimitsOutChanged?: string;
    /** xsd:int */
    bwLimitsType?: string;
    /** xsd:boolean */
    bwLimitsTypeChanged?: string;
    /** xsd:dateTime */
    expirationDate?: string;
    /** xsd:string */
    hwRevision?: string;
    /** xsd:boolean */
    isCacheKeyEnabled?: string;
    /** xsd:boolean */
    isCacheKeyExpire?: string;
    /** xsd:boolean */
    isLoadBalancingEnabled?: string;
    /** xsd:boolean */
    isLoadBalancingExpire?: string;
    /** xsd:boolean */
    isQosKeyEnabled?: string;
    /** xsd:boolean */
    isQosKeyExpire?: string;
    /** xsd:boolean */
    isWuEnabled?: string;
    /** xsd:boolean */
    isWuExpireDateEnabled?: string;
    /** license */
    license?: License;
    /** licenseInfo */
    licenseInfo?: LicenseInfo;
    /** xsd:int */
    ltAllow?: string;
    /** xsd:int */
    modelType?: string;
    /** xsd:boolean */
    newLicense?: string;
    /** xsd:string */
    productModel?: string;
    /** xsd:boolean */
    productModelChanged?: string;
    /** xsd:string */
    productType?: string;
    /** xsd:string */
    softwareVersion?: string;
    /** xsd:boolean */
    softwareVersionChanged?: string;
    /** systemLimitsTopicDTO */
    systemLimitsTopicDTO?: SystemLimitsTopicDto;
    /** wuCounter */
    wuCounter?: WuCounter;
}
