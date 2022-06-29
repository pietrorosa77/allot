import { Boards } from "./Boards";
import { Sensors } from "./Sensors";

/**
 * return
 * @targetNSAlias `ns0`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface Return33 {
    /** boards */
    boards?: Boards;
    /** sensors */
    sensors?: Sensors;
}
