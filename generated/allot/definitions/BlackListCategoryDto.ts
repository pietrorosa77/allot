
/**
 * BlackListCategoryDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.websafe.nms.allot.com`
 */
export interface BlackListCategoryDto {
    /** BlackListAction|xsd:string|Monitor,Block,Redirect,Unknown */
    action?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    redirectUrl?: string;
}
