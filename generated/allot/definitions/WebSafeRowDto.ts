
/**
 * WebSafeRowDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.websafe.nms.allot.com`
 */
export interface WebSafeRowDto {
    /** xsd:string */
    actRedirect?: string;
    /** xsd:string */
    action?: string;
    /** xsd:string */
    categoryName?: string;
    /** xsd:long */
    creationDate?: string;
    /** xsd:string */
    creationDateStr?: string;
    /** xsd:string */
    description?: string;
    /** xsd:string */
    errDescription?: string;
    /** xsd:long */
    expirationDate?: string;
    /** xsd:string */
    expirationDateStr?: string;
    /** OperatorSource|xsd:string|BLACK_LIST,WHITE_LIST */
    operatorSource?: string;
    /** xsd:string */
    redirectUrl?: string;
    /** xsd:long */
    rowNumber?: string;
    /** xsd:string */
    url?: string;
}
