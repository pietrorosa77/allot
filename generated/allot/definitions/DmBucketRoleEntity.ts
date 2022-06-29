import { DmOutputBucketEntity } from "./DmOutputBucketEntity";

/**
 * DmBucketRoleEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmBucketRoleEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** BucketTypeEnum|xsd:string|MANIFEST,HDR,VDR,BDR,UDR,SDR,GENERIC,CONV,VC,HDRA,CMDR,CMCS,CMBM,MMDR,HTTP,CONV_RTS,CONV_RTU,WSPREDIRECTION,WSPMAIL,WSPINTERNAL,WSPLCBLMAINTENANCE,WSPADSFREE,WSPFIREWALL,WSPNOTIFICATIONS,WSPSSLTRAFFIC,WSPPERFORMANCE,WSPWEBPROXY,WSPAUDITLOGIN,WSPAUDITUSERS,WSPAUDITMASTERTABLES,WSPFTPPROXY,WSPWEBNAVIGATION,WSPBGP,WSPSEARCHENGINES,WSPCACHE,WSPTRAFFIC,WSPREQUEST,WSPWEBTRAFFIC,WSPWEBQOS,WSPWEBBANDWIDTH,WSPCONNECT,WSPCUSTOMTRANS,WSPSERVICEACTIVATION,WSPUSERACTIVATION,WSPACTIVATIONGUI,WSPACTIVATIONGUIDATA,URDR,WSPTRACKING */
    bucketType?: string;
    /** outputBucketEntity */
    outputBucketEntity?: DmOutputBucketEntity;
    /** DmRoleKeyEnum|xsd:string|PRIMARY,SECONDARY */
    role?: string;
}
