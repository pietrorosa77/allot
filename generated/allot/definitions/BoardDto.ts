
/**
 * BoardDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.device.configuration.nms.allot.com`
 */
export interface BoardDto {
    /** BoardActivityStatus|xsd:string|NOT_READY,ACTIVE,STANDBY,NOT_APPLICABLE */
    activityStatus?: string;
    /** xsd:string */
    boardIPv6DefaultGateway?: string;
    /** xsd:int */
    boardIPv6DefaultGatewayType?: string;
    /** xsd:string */
    boardIPv6MgmtIpAddr?: string;
    /** xsd:int */
    boardIPv6MgmtIpAddrType?: string;
    /** xsd:string */
    boardIPv6MgmtSubnetMask?: string;
    /** xsd:int */
    boardIPv6MgmtSubnetMaskType?: string;
    /** xsd:int */
    boardId?: string;
    /** xsd:boolean */
    coreController?: string;
    /** xsd:string */
    defaultGateway?: string;
    /** xsd:int */
    deviceId?: string;
    /** xsd:int */
    hardwareStatus?: string;
    /** xsd:string */
    hardwareVersion?: string;
    /** xsd:int */
    id?: string;
    /** xsd:string */
    managementIp?: string;
    /** xsd:string */
    managementSubnetMask?: string;
    /** xsd:string */
    serialNumber?: string;
    /** xsd:int */
    softwareStatus?: string;
    /** SwStatus|xsd:string|na,notActive,active,standBy,notApplicable */
    softwareStatusName?: string;
    /** xsd:string */
    softwareVersion?: string;
    /** xsd:int */
    type?: string;
    /** BoardType|xsd:string|empty,thirdParty,APC,DPIC,host,bypass,spider,scorpion,switchType,dispatcher,bypass2,VAS,EXC_CC,EXC_SBH,NEX_1,HSFP,VDC,VDCAPD,VDCITR,SMP,VDCMGMT,CC400,SFB400RIO8C,SFB420RIO24C,SFB420RIO102C,shelfManager,SFB420RIO102CF,SG9500,SGVE,SG9500A,SG9100,vasType2,CC500,sg9008,ssg400,vhost,vcc,vfb */
    typeName?: string;
}
