import { Arg01 } from "./Arg01";
import { Prop } from "./Prop";

/**
 * LagTopicDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface LagTopicDto {
    /** xsd:int */
    action?: string;
    /** xsd:boolean */
    actionChanged?: string;
    /** xsd:int */
    admin?: string;
    /** xsd:boolean */
    adminChanged?: string;
    /** xsd:int */
    boardId?: string;
    /** xsd:boolean */
    boardIdChanged?: string;
    /** xsd:int */
    bridgeNumber?: string;
    /** xsd:boolean */
    bridgeNumberChanged?: string;
    /** xsd:int */
    id?: string;
    /** xsd:boolean */
    idChanged?: string;
    /** xsd:int */
    ifId?: string;
    /** xsd:boolean */
    ifIdChanged?: string;
    /** xsd:int */
    isPortFunctionConfigurable?: string;
    /** xsd:string */
    label?: string;
    /** xsd:string */
    lagName?: string;
    /** xsd:int */
    mirrorAction?: string;
    /** xsd:boolean */
    mirrorActionChanged?: string;
    /** xsd:int */
    mode?: string;
    /** xsd:boolean */
    modeChanged?: string;
    /** xsd:int */
    modeOption?: string;
    /** xsd:boolean */
    modeOptionChanged?: string;
    /** xsd:int */
    oper?: string;
    /** xsd:boolean */
    operChanged?: string;
    /** xsd:int */
    portConnectedTo?: string;
    /** xsd:boolean */
    portConnectedToChanged?: string;
    /** xsd:int */
    portFunction?: string;
    /** xsd:boolean */
    portFunctionChanged?: string;
    /** xsd:boolean */
    portFunctionConfigurableChanged?: string;
    /** xsd:int */
    portNumber?: string;
    /** xsd:boolean */
    portNumberChanged?: string;
    /** xsd:int */
    portPhysicalType?: string;
    /** xsd:boolean */
    portPhysicalTypeChanged?: string;
    /** xsd:integer */
    speed?: string;
    /** xsd:boolean */
    speedChanged?: string;
    /** xsd:int */
    speedOption?: string;
    /** xsd:boolean */
    speedOptionChanged?: string;
    /** xsd:int */
    status?: string;
    /** xsd:boolean */
    statusChanged?: string;
    /** xsd:int */
    support?: string;
    /** xsd:int */
    supportedActions?: string;
    /** xsd:boolean */
    supportedActionsChanged?: string;
    /** xsd:int */
    switchId?: string;
    /** xsd:int */
    usage?: string;
    /** xsd:int */
    usageCapability?: string;
    /** xsd:boolean */
    usageChanged?: string;
    /** xsd:int */
    usagePreviousValue?: string;
    /** memberIds */
    memberIds?: Arg01;
    /** xsd:boolean */
    memberIdsChanged?: string;
    /** prop */
    prop?: Prop;
    /** xsd:boolean */
    propChanged?: string;
}
