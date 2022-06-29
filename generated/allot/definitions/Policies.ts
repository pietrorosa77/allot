import { PolicyDto } from "./PolicyDto";

/**
 * policies
 * @targetNSAlias `ns6`
 * @targetNamespace `http://dto.policy.nms.allot.com`
 */
export interface Policies {
    /** PolicyDTO[] */
    PolicyDTO?: Array<PolicyDto>;
}
