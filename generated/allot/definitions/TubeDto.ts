import { Action1 } from "./Action1";
import { Arg06 } from "./Arg06";
import { Filters } from "./Filters";
import { Tube2Alert2Actions } from "./Tube2Alert2Actions";
import { Return5 } from "./Return5";

/**
 * TubeDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.policy.nms.allot.com`
 */
export interface TubeDto {
    /** action */
    action?: Action1;
    /** xsd:int */
    admin?: string;
    /** xsd:int */
    alarmStatus?: string;
    /** xsd:int */
    changeStatus?: string;
    /** childTubes */
    childTubes?: Arg06;
    /** xsd:int */
    cost?: string;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    deviceId?: string;
    /** xsd:int */
    expand?: string;
    /** xsd:boolean */
    fallback?: string;
    /** filters */
    filters?: Filters;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:int */
    line?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    pipe?: string;
    /** xsd:int */
    servicePlanId?: string;
    /** tube2alert2actions */
    tube2alert2actions?: Tube2Alert2Actions;
    /** tube2alerts */
    tube2alerts?: Return5;
    /** xsd:string */
    tubeType?: string;
    /** xsd:int */
    vc?: string;
}
