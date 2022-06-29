import { Hosts } from "./Hosts";
import { Arg06 } from "./Arg06";
import { Users } from "./Users";

/**
 * arg0
 * @targetNSAlias `ns31`
 * @targetNamespace `http://dto.npp.nms.allot.com`
 */
export interface Arg016 {
    /** xsd:int */
    admin?: string;
    /** xsd:int */
    changeStatus?: string;
    /** xsd:string */
    description?: string;
    /** xsd:string */
    email?: string;
    /** hosts */
    hosts?: Hosts;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:int */
    maxRules?: string;
    /** xsd:string */
    name?: string;
    /** tubes */
    tubes?: Arg06;
    /** users */
    users?: Users;
}
