import { RolesToGroups } from "./RolesToGroups";

/**
 * ldapConfiguration
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface LdapConfiguration {
    /** xsd:string */
    contextUsers?: string;
    /** xsd:boolean */
    contextUsersChanged?: string;
    /** rolesToGroups */
    rolesToGroups?: RolesToGroups;
    /** xsd:boolean */
    rolesToGroupsChanged?: string;
    /** xsd:boolean */
    securityCredentialsChanged?: string;
    /** xsd:boolean */
    securityPrincipalChanged?: string;
}
