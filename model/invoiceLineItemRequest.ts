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

/**
* # The InvoiceLineItem Object ### Description The `InvoiceLineItem` object is used to represent an invoice\'s line items.  ### Usage Example Fetch from the `GET Invoice` endpoint and view the invoice\'s line items.
*/
export class InvoiceLineItemRequest {
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The line item\'s description.
    */
    'description'?: string | null;
    /**
    * The line item\'s unit price.
    */
    'unit_price'?: number | null;
    /**
    * The line item\'s quantity.
    */
    'quantity'?: number | null;
    /**
    * The line item\'s total amount.
    */
    'total_amount'?: number | null;
    'item'?: string | null;
    'account'?: string | null;
    'tracking_category'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "unit_price",
            "baseName": "unit_price",
            "type": "number"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "total_amount",
            "baseName": "total_amount",
            "type": "number"
        },
        {
            "name": "item",
            "baseName": "item",
            "type": "string"
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "tracking_category",
            "baseName": "tracking_category",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InvoiceLineItemRequest.attributeTypeMap;
    }
}

