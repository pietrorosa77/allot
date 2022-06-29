import { FailedLoginDto } from "./FailedLoginDto";

/**
 * failedLogins
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.users.admin.nms.allot.com`
 */
export interface FailedLogins {
    /** FailedLoginDTO[] */
    FailedLoginDTO?: Array<FailedLoginDto>;
}
