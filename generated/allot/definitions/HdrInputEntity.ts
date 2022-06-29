import { AttrOverrideEntities } from "./AttrOverrideEntities";
import { FilterRuleEntities } from "./FilterRuleEntities";

/**
 * hdrInputEntity
 * @targetNSAlias `ns0`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface HdrInputEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** DmActionInputBucketEnum|xsd:string|INCLUDE,EXCLUDE */
    action?: string;
    /** attrOverrideEntities */
    attrOverrideEntities?: AttrOverrideEntities;
    /** xsd:boolean */
    attrOverrideEntitiesChanged?: string;
    /** BucketTypeEnum|xsd:string|MANIFEST,HDR,VDR,BDR,UDR,SDR,GENERIC,CONV,VC,HDRA,CMDR,CMCS,CMBM,MMDR,HTTP,CONV_RTS,CONV_RTU,WSPREDIRECTION,WSPMAIL,WSPINTERNAL,WSPLCBLMAINTENANCE,WSPADSFREE,WSPFIREWALL,WSPNOTIFICATIONS,WSPSSLTRAFFIC,WSPPERFORMANCE,WSPWEBPROXY,WSPAUDITLOGIN,WSPAUDITUSERS,WSPAUDITMASTERTABLES,WSPFTPPROXY,WSPWEBNAVIGATION,WSPBGP,WSPSEARCHENGINES,WSPCACHE,WSPTRAFFIC,WSPREQUEST,WSPWEBTRAFFIC,WSPWEBQOS,WSPWEBBANDWIDTH,WSPCONNECT,WSPCUSTOMTRANS,WSPSERVICEACTIVATION,WSPUSERACTIVATION,WSPACTIVATIONGUI,WSPACTIVATIONGUIDATA,URDR,WSPTRACKING */
    bucketType?: string;
    /** filterRuleEntities */
    filterRuleEntities?: FilterRuleEntities;
    /** xsd:boolean */
    ruleEntitiesChanged?: string;
}
