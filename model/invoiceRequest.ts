/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CurrencyEnum } from './currencyEnum';
import { InvoiceTypeEnum } from './invoiceTypeEnum';

/**
* # The Invoice Object ### Description The `Invoice` object is used to represent a company\'s invoices.  ### Usage Example Fetch from the `LIST Invoices` endpoint and view a company\'s invoices.
*/
export class InvoiceRequest {
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The invoice\'s type.
    */
    'type'?: InvoiceTypeEnum | null;
    'contact'?: string | null;
    /**
    * The invoice\'s number.
    */
    'number'?: string | null;
    /**
    * The invoice\'s issue date.
    */
    'issue_date'?: Date | null;
    /**
    * The invoice\'s due date.
    */
    'due_date'?: Date | null;
    /**
    * The invoice\'s paid date.
    */
    'paid_on_date'?: Date | null;
    /**
    * The invoice\'s private note.
    */
    'memo'?: string | null;
    /**
    * The invoice\'s currency.
    */
    'currency'?: CurrencyEnum | null;
    /**
    * The invoice\'s total discount.
    */
    'total_discount'?: number | null;
    /**
    * The invoice\'s sub-total.
    */
    'sub_total'?: number | null;
    /**
    * The invoice\'s total tax amount.
    */
    'total_tax_amount'?: number | null;
    /**
    * The invoice\'s total amount.
    */
    'total_amount'?: number | null;
    /**
    * The invoice\'s remaining balance.
    */
    'balance'?: number | null;
    /**
    * When the third party\'s invoice entry was updated.
    */
    'remote_updated_at'?: Date | null;
    /**
    * Array of `Payment` object IDs.
    */
    'payments'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "InvoiceTypeEnum"
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "string"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "issue_date",
            "baseName": "issue_date",
            "type": "Date"
        },
        {
            "name": "due_date",
            "baseName": "due_date",
            "type": "Date"
        },
        {
            "name": "paid_on_date",
            "baseName": "paid_on_date",
            "type": "Date"
        },
        {
            "name": "memo",
            "baseName": "memo",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "CurrencyEnum"
        },
        {
            "name": "total_discount",
            "baseName": "total_discount",
            "type": "number"
        },
        {
            "name": "sub_total",
            "baseName": "sub_total",
            "type": "number"
        },
        {
            "name": "total_tax_amount",
            "baseName": "total_tax_amount",
            "type": "number"
        },
        {
            "name": "total_amount",
            "baseName": "total_amount",
            "type": "number"
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "number"
        },
        {
            "name": "remote_updated_at",
            "baseName": "remote_updated_at",
            "type": "Date"
        },
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return InvoiceRequest.attributeTypeMap;
    }
}

